import Form from "../components/Form";
import SideBlock from "../components/SideBlock";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import SmallScreenBottomButton from "../components/SmallScreenBottomButton";
import { useContext, useState } from "react";
import AppContext from "../contexts/AppContext";
import { getDate, getMonth } from "date-fns";

export default function Home() {
	const { guest, user, date } = useContext(AppContext);
	const [custId, setCustId] = useState(undefined);
	const [txToken, setToken] = useState(undefined);
	const [mid, setMid] = useState(undefined);
	const [orderId, setOrderId] = useState(undefined);
	const [gotRes, setGotRes] = useState(false);

	const onClickConfirmButton = async () => {
		if (!date) {
			return alert("Please select a date");
		}
		if (!user) {
			return alert("Please sign in to continue");
		}
		if (guest.child + guest.adult <= 0) {
			return alert("Please select at least one ticket to continue");
		}

		let t = JSON.parse(localStorage.getItem("seats"));
		if (t[getMonth(date)][getDate(date)] < guest.child + guest.adult) {
			return alert(
				`Only ${
					t[getMonth(date)][getDate(date)]
				} seats are available at this date`
			);
		}
		t[getMonth(date)][getDate(date)] =
			parseInt(t[getMonth(date)][getDate(date)]) -
			parseInt(guest.child) -
			parseInt(guest.adult);
		localStorage.setItem("seats", JSON.stringify(t));

		if (!localStorage.getItem(user.email)) {
			localStorage.setItem(
				user.email,
				JSON.stringify({
					allOrders: [{ guest: guest, date: date }],
				})
			);
		} else {
			let arr = JSON.parse(localStorage.getItem(user.email));
			arr.allOrders.push({ guest: guest, date: date });
			localStorage.setItem(user.email, JSON.stringify(arr));
		}

		let data = {
			custId: user.email,
			email: user.email,
			amount: parseInt(guest.child * 70 + guest.adult * 95),
		};

		fetch("/api/payment/paynow", {
			method: "POST",
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => {
				setToken(data.token);
				setMid(data.mid);
				setOrderId(data.orderId);
				setGotRes(true);
				document.getElementById("redFrom").submit();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="pb-16 text-[#444444] w-full">
			<div className="lg:flex lg:flex-row-reverse lg:px-16 px-6 gap-5">
				<SideBlock onClickConfirmButton={onClickConfirmButton} />
				<Form onClickConfirmButton={onClickConfirmButton} />
			</div>

			<AboutUs />
			<SmallScreenBottomButton onClickConfirmButton={onClickConfirmButton} />
			<Footer />
			<Hiddenfrom mid={mid} orderId={orderId} token={txToken} />
		</div>
	);
}

const Hiddenfrom = (props) => {
	return (
		<div>
			<form
				id="redFrom"
				method="post"
				action={
					"https://securegw-stage.paytm.in/theia/api/v1/showPaymentPage?mid=" +
					props.mid +
					"&orderId=" +
					props.orderId
				}
				name="paytm"
			>
				<input type="hidden" name="mid" value={props.mid} />
				<input type="hidden" name="orderId" value={props.orderId} />
				<input type="hidden" name="txnToken" value={props.token} />
			</form>
		</div>
	);
};
