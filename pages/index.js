import Header from "../components/Header";
import Form from "../components/Form";
import SideBlock from "../components/SideBlock";
import Head from "next/head";

export default function Home() {
  return (
		<div className="">
			<Head>
				<script
					src="https://kit.fontawesome.com/ecc785940a.js"
					crossorigin="anonymous"
				></script>
			</Head>
			<Header />
			<div className="flex px-16">
				<Form />
				<SideBlock />
			</div>
		</div>
	);
}
