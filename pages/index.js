import Header from "../components/Header";
import Form from "../components/Form";
import SideBlock from "../components/SideBlock";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import SmallScreenHeader from "../components/SmallScreenHeader";
import SmallScreenBottomButton from "../components/SmallScreenBottomButton";
import Head from "next/head";

export default function Home() {
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
				<SideBlock />
				<Form />
			</div>

			<AboutUs />
			<SmallScreenBottomButton />
			<Footer />
		</div>
	);
}
