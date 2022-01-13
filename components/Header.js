function Header() {
  return (
		<div className="flex px-16 py-4 items-center border-b-[1px] sticky top-0 w-full z-50 bg-white">
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
					<div className=" border-2 rounded-full h-6 w-6 flex items-center justify-center text-xs" >?</div>
					<div>Help</div>
				</div>
				<div className="outline outline-1 px-2 py-1 rounded-sm outline-slate-700 hover:bg-purple-600 hover:text-white cursor-pointer">Sign in</div>
			</div>
		</div>
	);
}

export default Header
