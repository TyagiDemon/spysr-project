import Header from "../components/Header";
import Form from "../components/Form";
import SideBlock from "../components/SideBlock";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import SmallScreenHeader from "../components/SmallScreenHeader";
import SmallScreenBottomButton from "../components/SmallScreenBottomButton";
import Head from "next/head";
import { useContext } from "react";
import AppContext from "../contexts/AppContext";
import { getDate, getMonth } from "date-fns";
import Router from "next/router";

export default function Home() {
	const { guest, user, date } = useContext(AppContext);
	const onClickConfirmButton = () => {
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
			localStorage.setItem(user.email, JSON.stringify({ allOrders: [guest] }));
		} else {
			let arr = JSON.parse(localStorage.getItem(user.email));
			arr.allOrders.push(guest);
			localStorage.setItem(user.email, JSON.stringify(arr));
		}
		Router.push("/dashboard");
	};

	return (
		<div className="pb-16 text-[#444444] w-full">
			<Head>
				<script
					src="https://kit.fontawesome.com/ecc785940a.js"
					crossOrigin="anonymous"
				></script>
			</Head>
			<Header />
			<SmallScreenHeader />
			<div className="lg:flex lg:flex-row-reverse lg:px-16 px-6 gap-5">
				<SideBlock onClickConfirmButton={onClickConfirmButton} />
				<Form onClickConfirmButton={onClickConfirmButton} />
			</div>

			<AboutUs />
			<SmallScreenBottomButton onClickConfirmButton={onClickConfirmButton} />
			<Footer />
		</div>
	);
}
