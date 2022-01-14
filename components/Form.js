function Form() {
	return (
		<div className="flex-1 mt-8 text-gray-800 pb-5">
			<div className="hidden lg:block">
				<div className="text-xl lg:text-2xl font-bold">Guests</div>

				<div className="mt-8 grid grid-cols-3 w-full items-center">
					<div>
						<div className="text-lg font-semibold">Adult</div>
						<div className="text-xs font-semibold mt-2">Above 16 yrs</div>
					</div>
					<div className="flex items-center gap-6 justify-center">
						<div className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-200 text-purple-600 font-extralight">
							<i className="fas fa-minus"></i>
						</div>
						<div className="">1</div>
						<div className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-200 text-purple-600 font-extralight">
							<i className="fas fa-plus"></i>
						</div>
					</div>
					<div className="font-bold text-lg text-right">&#8377; 95</div>
				</div>

				<div className="mt-8 grid grid-cols-3 w-full items-center">
					<div>
						<div className="text-lg font-semibold">Child</div>
						<div className="text-xs font-semibold mt-2">5 to 15 yrs</div>
					</div>
					<div className="flex items-center gap-6 justify-center">
						<div className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-200 text-purple-600 font-extralight">
							<i className="fas fa-minus"></i>
						</div>
						<div className="">1</div>
						<div className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-200 text-purple-600 font-extralight">
							<i className="fas fa-plus"></i>
						</div>
					</div>
					<div className="font-bold text-lg text-right">&#8377; 95</div>
				</div>
			</div>

			<div className="mt-14">
				<div>
					<div className="text-xl lg:text-2xl font-semibold">
						Enter your details
					</div>
					<div className="text-sm font-[550]">
						Booking for a friend? Enter their details
					</div>
				</div>

				<div className="w-full lg:grid lg:grid-cols-2 gap-6 mt-4">
					<div className="mt-6">
						<div className="font-semibold">Full Name</div>
						<div className="text-xs font-[550] my-2 text-gray-600 tracking-tight">
							Same as on your ID
						</div>
						<div>
							<input className="w-full outline outline-1 outline-gray-300 p-4 rounded-md focus:outline-black" />
						</div>
					</div>
					<div className="mt-6">
						<div className="font-semibold">Mobile Number</div>
						<div className="text-xs font-[550] my-2 text-gray-600 tracking-tight">
							We may reach out for booking updates here over SMS/Whatsapp
						</div>
						<div>
							<input className="w-full outline outline-1 outline-gray-300 p-4 rounded-md focus:outline-black" />
						</div>
					</div>
					<div className="mt-6">
						<div className="font-semibold">Email</div>
						<div className="text-xs font-[550] my-2 text-gray-600 tracking-tight">
							We&apos;ll send your tickets here
						</div>
						<div>
							<input className="w-full outline outline-1 outline-gray-300 p-4 rounded-md focus:outline-black" />
						</div>
					</div>
					<div className="mt-6">
						<div className="font-semibold">Confirm Email</div>
						<div className="text-xs font-[550] my-2 text-gray-600 tracking-tight">
							Just to ensure we&apos;ve got this right
						</div>
						<div>
							<input className="w-full outline outline-1 outline-gray-300 p-4 rounded-md focus:outline-black" />
						</div>
					</div>
				</div>

				<div className="text-green-600 font-[550] text-sm mt-3">
					Have a Promo Code?
				</div>
			</div>

			<div className="mt-14">
				<div className="text-xl lg:text-2xl font-bold">
					Enter payment details
				</div>
				<div className="flex mt-8">
					<div className="flex-1 flex flex-col gap-8">
						<div>
							<div className="font-semibold">Card Number</div>
							<div>
								<input className="w-full outline outline-1 outline-gray-300 p-4 rounded-md focus:outline-black mt-2" />
							</div>
						</div>
						<div className="flex gap-8">
							<div>
								<div className="font-semibold">Expiry</div>
								<div>
									<input className="w-full outline outline-1 outline-gray-300 p-4 rounded-md focus:outline-black mt-2" />
								</div>
							</div>
							<div>
								<div className="font-semibold">CVV</div>
								<div>
									<input className="w-full outline outline-1 outline-gray-300 p-4 rounded-md focus:outline-black mt-2" />
								</div>
							</div>
						</div>
						<div>
							<div className="font-semibold">Name on the Card</div>
							<div>
								<input className="w-full outline outline-1 outline-gray-300 p-4 rounded-md focus:outline-black mt-2" />
							</div>
						</div>

						<div>
							<div className="text-xs font-semibold mb-4">
								Your card details are secured using 2048-bit SSL encryption.
							</div>
							<div>
								<img
									alt=""
									src="https://cdn-imgix.headout.com/assets/images/checkout/security-compliance-v1.svg?auto=format&h=16&w=&crop=faces&fit=min&fm=jpeg&q=70"
									className="bg-contain w-[250px]"
								/>
							</div>
						</div>
					</div>

					<div className="lg:flex-1"></div>
				</div>

				<div className="flex flex-col gap-3 border-y-[1px] py-8 mt-8">
					<div className="font-semibold text-xl text-gray-700">
						Total Payable: &#8377; 95
					</div>
				</div>

				<div className="text-xs flex flex-col gap-4 font-semibold border-b-[1px] py-4">
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

				<div>
					<div className="text-xs font-semibold mt-4">
						By clicking &apos;Confirm &#38; Pay&apos; you agree to our general
						terms and privacy policy
					</div>
					<div id="formButton" className="hidden lg:block text-xl w-1/2 font-semibold text-white bg-purple-600 text-center py-2 rounded-md mt-8">
						Confirm &#38; Pay
					</div>
				</div>
			</div>
		</div>
	);
}

export default Form;
