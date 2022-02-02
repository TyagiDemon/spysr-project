import { SessionProvider } from "next-auth/react";
import { useState, useEffect } from "react";
import "../styles/globals.css";
import { format } from "date-fns";
import AppContext from "../contexts/AppContext";

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}) {
	const [guest, setGuest] = useState({ adult: 1, child: 0 });
	const [date, setDate] = useState();

	useEffect(() => {
		if (localStorage.getItem("temp")) {
			setGuest(JSON.parse(localStorage.getItem("temp")));
		}
	}, []);

	return (
		<SessionProvider session={session}>
			<AppContext.Provider value={{ guest, setGuest, date, setDate }}>
				<Component {...pageProps} />
			</AppContext.Provider>
		</SessionProvider>
	);
}
