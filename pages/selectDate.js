import Header from "../components/Header";
import SelectDate from "../components/SelectDate";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import SmallScreenHeader from "../components/SmallScreenHeader";
import SmallScreenBottomButton from "../components/SmallScreenBottomButton";
import Head from "next/head";

export default function selectDate() {
	return (
		<div className="pb-16">
			<Head>
				<script
					src="https://kit.fontawesome.com/ecc785940a.js"
					crossOrigin="anonymous"
				></script>
			</Head>
			<Header />
			<SmallScreenHeader />
			<SelectDate />
			<AboutUs />
			<Footer />
		</div>
	);
}
