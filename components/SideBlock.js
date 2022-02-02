import { useState, useEffect, useContext } from "react";
import { getSession } from "next-auth/react";
import AppContext from "../contexts/AppContext";
import Router from "next/router";

function SideBlock() {
	const { guest, setGuest } = useContext(AppContext);
	const [user, setUser] = useState(null);

	useEffect(async () => {
		const session = await getSession();

		if (session) {
			setUser(session.user);
		} else {
			setUser(null);
		}
	}, []);

	return (
		<div
			className={`flex flex-col w-full mx-auto lg:max-w-[33%] lg:border-[1px] rounded-md lg:p-5 text-gray-600 gap-3 mt-8 h-min lg:sticky lg:-top-[100px]`}
		>
			<div className="gap-3 flex-col flex border-b-[1px] pb-4">
				<div className="flex items-center gap-2">
					<div className="text-lg font-semibold text-gray-800 tracking-tight">
						The London Pass - Unlimited Attractions Pass
					</div>
					<div>
						<img alt="" src="images/pic1.jpg" className="contain rounded-md" />
					</div>
				</div>
				<div className="flex justify-between font-semibold text-sm">
					<div className="">Mon, 21 Feb</div>
					<div className="text-cyan-600">Edit</div>
				</div>
				<div className="flex justify-between font-semibold text-sm">
					<div className="">2 Days</div>
					<div className="text-cyan-600">Edit</div>
				</div>
			</div>

			<div className="border-b-[1px] pb-4 gap-3 flex-col flex">
				<div>
					<i className="fas fa-star mr-2"></i>
					4.5 star rating by 1225 customers
				</div>
				<div>
					<i className="fas fa-check mr-2"></i>Free cancellation upto 24 hours
				</div>
				<div>
					<i className="far fa-money-bill-alt mr-2"></i>No additional fees
				</div>
			</div>

			{guest.adult + guest.child <= 0 && (
				<div className="flex justify-between font-semibold">
					<div className="">No ticket selected</div>
					<div className="">&#8377; 0</div>
				</div>
			)}
			{guest.adult > 0 && (
				<div className="flex justify-between font-semibold">
					<div className="">
						{guest.adult} Adult{guest.adult > 1 && "s"}
					</div>
					<div className="">&#8377; {guest.adult * 95}</div>
				</div>
			)}
			{guest.child > 0 && (
				<div className="flex justify-between font-semibold">
					<div className="">
						{guest.child} Child{guest.child > 1 && "ren"}
					</div>
					<div className="">&#8377; {guest.adult * 70}</div>
				</div>
			)}

			<div className="flex flex-col gap-3 border-y-[1px] pb-4 pt-2">
				<div className="flex justify-between font-bold text-lg text-gray-700">
					<div className="">Total Payable</div>
					<div className="">&#8377; {guest.adult * 95 + guest.child * 70}</div>
				</div>
				<div className="flex gap-2 items-center">
					<div className="font-semibold">
						Sign up to get &#8377;9.50 cashback!
					</div>
					<div className=" border-2 rounded-full h-6 w-6 flex items-center justify-center text-xs">
						?
					</div>
				</div>
			</div>

			<div className="hidden text-xs lg:flex lg:flex-col gap-3 font-semibold border-b-[1px] pb-4">
				<div>
					You will get exclusive access to insider only deals, personalised
					offers and updates. You can unsubscribe anytime.
				</div>
				<div className="flex items-center gap-2">
					<input
						type="checkbox"
						id="checkbox1"
						name="checkbox1"
						// value=""
						className="accent-purple-600"
					/>
					<label htmlFor="checkbox1">
						Do not send me offers on email and updates on WhatsApp
					</label>
				</div>
			</div>

			<div className="hidden lg:block">
				<div className="text-xs font-semibold">
					By clicking &apos;Confirm &#38; Pay&apos; you agree to our general
					terms and privacy policy
				</div>
				<div
					id="sideBlockButton"
					className="text-xl font-semibold text-white bg-purple-600 text-center py-2 rounded-md mt-8 cursor-pointer"
					onClick={() => {
						if (!user) {
							return alert("Please sign in to continue");
						}
						if (guest.child + guest.adult <= 0) {
							return alert("Please select at least one ticket to continue");
						}
						if (!localStorage.getItem(user.email)) {
							localStorage.setItem(
								user.email,
								JSON.stringify({ allOrders: [guest] })
							);
						} else {
							let arr = JSON.parse(localStorage.getItem(user.email));
							arr.allOrders.push(guest);
							localStorage.setItem(user.email, JSON.stringify(arr));
						}
						Router.push("/dashboard");
					}}
				>
					Confirm &#38; Pay
				</div>
			</div>
		</div>
	);
}

export default SideBlock;
