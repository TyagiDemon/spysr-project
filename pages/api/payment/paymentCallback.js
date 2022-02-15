export default function paymentCallback(req, res) {
	if (req.body.STATUS === "TXN_SUCCESS")
		res.writeHead(302, { Location: "/dashboard" }).end();
	else res.writeHead(302, { Location: "/checkout" }).end();
}
