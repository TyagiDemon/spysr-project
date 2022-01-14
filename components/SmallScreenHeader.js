function SmallScreenHeader() {
  return (
		<div className="flex justify-around sticky top-0 lg:hidden bg-white items-center py-2 border-b-2 font-bold text-sm">
			<div className="cursor-pointer text-4xl font-extralight">&lt;</div>
			<div>Confirm &#38; Pay</div>
			<div className="cursor-pointer border-2 rounded-full h-6 w-6 flex items-center justify-center text-xs">
				?
			</div>
		</div>
	);
}

export default SmallScreenHeader
