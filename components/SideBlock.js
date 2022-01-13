function SideBlock() {
	return (
		<div className="flex flex-col max-w-[33%] border-2 rounded-md p-5 text-gray-600 gap-3 mt-8">
			<div className="gap-3 flex-col flex border-b-2 pb-4">
				<div className="flex items-center gap-2">
					<div className="text-lg font-semibold text-gray-800 tracking-tight">
						The London Pass - Unlimited Attractions Pass
					</div>
					<div>
						<img src="images/pic1.jpg" className="contain rounded-md" />
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

			<div className="border-b-2 pb-4 gap-3 flex-col flex">
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

			<div className="flex justify-between font-semibold border-b-2 pb-4">
				<div className="">1 Adult</div>
				<div className="">&#8377; 95</div>
			</div>

			<div className="flex flex-col gap-3 border-b-2 pb-4">
				<div className="flex justify-between font-bold text-lg text-gray-700">
					<div className="">Total Payable</div>
					<div className="">&#8377; 95</div>
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

			<div className="text-xs flex flex-col gap-3 font-semibold border-b-2 pb-4">
				<div>
					You will get exclusive access to insider only deals, personalised
					offers and updates. You can unsubscribe anytime.
				</div>
				<div className="flex items-center gap-2">
					<input
						type="checkbox"
						id="checkbox1"
						name="checkbox1"
						value=""
						className="accent-purple-600"
					/>
					<label for="checkbox1">
						Do not send me offers on email and updates on WhatsApp
					</label>
				</div>
			</div>

			<div>
				<div className="text-xs font-semibold">
					By clicking 'Confirm &#38; Pay' you agree to our general terms and
					privacy policy
				</div>
				<div className="text-xl font-semibold text-white bg-purple-600 text-center py-2 rounded-md mt-8">
					Confirm &#38; Pay
				</div>
			</div>
		</div>
	);
}

export default SideBlock;
