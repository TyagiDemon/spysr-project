import { useState, useEffect } from "react";
import { getSession, signOut } from "next-auth/react";
import SignInPopup from "./SignInPopup";
import Modal from "@mui/material/Modal";

function Header() {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const [user, setUser] = useState(null);

	useEffect(async () => {
		const session = await getSession();
		console.log(session);
		if (session) {
			setUser(session.user);
		} else {
			setUser(null);
		}
	}, []);

	return (
		<>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<SignInPopup onClick={handleClose} />
			</Modal>
			<div className="lg:flex hidden px-16 py-4 items-center border-b-[1px] sticky top-0 w-full z-50 bg-white">
				<div className="flex flex-1 items-center gap-16 text-xs text-gray-500">
					<div className="text-purple-600 font-semibold text-2xl">headout</div>
					<div className="flex items-center gap-4">
						<div>1. The London Pass - Unlimited...</div>
						<div>2. Tickets</div>
						<div>3. Confirm &#38; Pay</div>
					</div>
				</div>
				<div className="flex items-center gap-4 text-sm font-semibold text-gray-700">
					<div className="flex items-center gap-1">
						<div className=" border-2 rounded-full h-6 w-6 flex items-center justify-center text-xs">
							?
						</div>
						<div>Help</div>
					</div>
					{!user && (
						<div
							className="outline outline-1 px-2 py-1 rounded-sm outline-slate-700 hover:bg-purple-600 hover:text-white cursor-pointer"
							onClick={handleOpen}
						>
							Sign in
						</div>
					)}
					{user && (
						<div className="flex items-center gap-2">
							<img src={user.image} className="h-6 w-6 rounded-full" />
							<div>{user.name}</div>
							<i
								onClick={() => signOut()}
								className="fas fa-sign-out-alt cursor-pointer"
							></i>
						</div>
					)}
				</div>
			</div>
		</>
	);
}

export default Header;
