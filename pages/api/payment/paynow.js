import https from "https";
import CheckSum from "../../../assets/CheckSum";

export default async function paynow(req, res) {
	if (req.method === "POST") {
		var reqBody = JSON.parse(req.body);
		var orderId = "RSGI" + Math.floor(Math.random(6) * 1000000);

		var callbackUrl = "https://spysr-project.vercel.app/api/payment/paymentCallback";
		var userInfo = {
			custId: reqBody.custId, // CLIENT CUSTOMER ID
			mobile: reqBody.mobile,
			email: reqBody.email,
			amount: parseInt(reqBody.amount),
		};

		const paytmParams = {};

		paytmParams.body = {
			requestType: "Payment",
			mid: process.env.mid,
			websiteName: process.env.website,
			orderId: orderId,
			callbackUrl: callbackUrl,
			txnAmount: {
				value: userInfo.amount,
				currency: "INR",
			},
			userInfo: userInfo,
		};

		CheckSum.generateSignature(
			JSON.stringify(paytmParams.body),
			process.env.key
		).then(function (checksum) {
			paytmParams.head = {
				signature: checksum,
			};

			var post_data = JSON.stringify(paytmParams);

			var options = {
				/* for Staging */
				hostname: "securegw-stage.paytm.in",

				/* for Production */
				// hostname: 'securegw.paytm.in',

				port: 443,
				path: `/theia/api/v1/initiateTransaction?mid=${process.env.mid}&orderId=${orderId}`,
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Content-Length": post_data.length,
				},
			};

			var response = "";
			var post_req = https.request(options, function (post_res) {
				post_res.on("data", function (chunk) {
					response += chunk;
				});

				post_res.on("end", function () {
					response = JSON.parse(response);
					//   console.log("txnToken:", response);

					res.send(
						JSON.stringify({
							mid: process.env.mid,
							orderId: orderId,
							token: response.body.txnToken,
						})
					);
				});
			});

			post_req.write(post_data);
			post_req.end();
		});
	} else {
		res.send(req.body);
	}
}
