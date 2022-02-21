import { signIn } from "next-auth/react";
import { useContext } from "react";
import AppContext from "../contexts/AppContext";

function SignInPopup({ onClick }) {
	const { guest, setGuest } = useContext(AppContext);
	return (
		<div className="bg-white w-[90%] lg:w-1/3 mx-auto mt-28 lg:mt-16 p-6 rounded-lg text-[#444444]">
			<div className="font-bold text-xl flex justify-between items-center">
				<div>Welcome</div>
				<div className="cursor-pointer h-min" onClick={onClick}>
					x
				</div>
			</div>
			<div className="mt-2 text-sm font-[500] tracking-tight">
				Sign in to get cashback as credits, insider-only offers and exclusive
				deals
			</div>
			<div
				className="text-center py-2 mt-3 rounded-md text-sm font-semibold border-[1px] cursor-pointer hover:bg-[#1771ed] hover:text-white transition"
				onClick={() => {
					// localStorage.setItem("temp", JSON.stringify(guest));
					signIn("facebook");
				}}
			>
				Continue with Facebook
			</div>
			<div
				className="text-center py-2 mt-3 rounded-md text-sm font-semibold border-[1px] cursor-pointer hover:bg-[#ff2525] hover:text-white transition"
				onClick={() => {
					// localStorage.setItem("temp", JSON.stringify(guest));
					signIn("google");
				}}
			>
				Continue with Google
			</div>
			<div className="my-6 text-center text-xs">OR</div>
			<div>
				<div className="font-semibold text-lg tracking-tight">
					Continue with email
				</div>
				<div className="mt-2 text-sm font-[500] tracking-tight">
					We’ll send a link to your email that will instantly sign you in
				</div>
				<input
					placeholder="Email Address"
					className="w-full outline outline-1 outline-gray-300 p-2 rounded-md focus:outline-black mt-2"
				/>
				<div className="text-xl font-semibold text-white bg-purple-600 text-center py-2 rounded-md mt-4">
					Send Link
				</div>
			</div>
		</div>
	);
}

export default SignInPopup;
