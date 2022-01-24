import { SessionProvider } from "next-auth/react";
import GuestContext from "../contexts/guestContext";
import { useState, useEffect } from "react";
import "../styles/globals.css";

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}) {
	const [guest, setGuest] = useState({ adult: 1, child: 0 });

	useEffect(() => {
		if (localStorage.getItem("temp")) {
			setGuest(JSON.parse(localStorage.getItem("temp")));
		}
	}, []);

	return (
		<SessionProvider session={session}>
			<GuestContext.Provider value={{ guest, setGuest }}>
				<Component {...pageProps} />
			</GuestContext.Provider>
		</SessionProvider>
	);
}
