function SignInPopup({onClick}) {
	return (
		<div className="bg-white w-1/3 mx-auto md:mt-28 p-6 rounded-lg text-[#444444]">
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
			<div className="text-center py-2 mt-3 rounded-md text-sm font-semibold border-[1px] cursor-pointer">
				Continue with Facebook
			</div>
			<div className="text-center py-2 mt-3 rounded-md text-sm font-semibold border-[1px] cursor-pointer">
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