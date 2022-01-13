import Header from "../components/Header";
import Form from "../components/Form";
import SideBlock from "../components/SideBlock";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Home() {
  return (
		<div className="pb-16">
			<Head>
				<script
					src="https://kit.fontawesome.com/ecc785940a.js"
					crossorigin="anonymous"
				></script>
			</Head>
			<Header />
			<div className="flex px-16 gap-5">
				<Form />
				<SideBlock />
			</div>

			<AboutUs />
			<Footer />
		</div>
	);
}
