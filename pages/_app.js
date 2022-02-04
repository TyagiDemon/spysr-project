import { SessionProvider } from "next-auth/react";
import { useState, useEffect } from "react";
import "../styles/globals.css";
import { getSession } from "next-auth/react";
import AppContext from "../contexts/AppContext";

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}) {
	const [guest, setGuest] = useState({ adult: 1, child: 0 });
	const [date, setDate] = useState();
	const [user, setUser] = useState(null);

	useEffect(async() => {
		if (localStorage.getItem("temp")) {
			setGuest(JSON.parse(localStorage.getItem("temp")));
		}

		const session = await getSession();
		if (session) {
			setUser(session.user);
		} else {
			setUser(null);
		}
	}, []);

	return (
		<SessionProvider session={session}>
			<AppContext.Provider value={{ guest, setGuest, date, setDate, user, setUser }}>
				<Component {...pageProps} />
			</AppContext.Provider>
		</SessionProvider>
	);
}
