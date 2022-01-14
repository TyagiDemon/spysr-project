function Footer() {
  return (
		<div className="mx-36 pt-16 hidden lg:block">
			<div className="grid grid-cols-5 border-b-[1px] pb-16">
				<div className="col-span-2 pr-24 font-semibold text-sm">
					<div className="text-purple-600 text-2xl">headout</div>
					<div className="mt-4">
						Headout is building the future of how we experience our cities.
					</div>
					<div className="mt-4">Made with ❤️ all over the 🌎</div>
					<div className="mt-8 text-xs">
						Headout Inc.
						<br />
						82 Nassau St #60351 New York, NY 10038
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<div className="font-semibold">Cities</div>
					<div>New York</div>
					<div>Las Vegas</div>
					<div>Rome</div>
					<div>Paris</div>
					<div>London</div>
					<div>Dubai</div>
					<div>Barcelona</div>
					<div>+59 more</div>
				</div>
				<div className="flex flex-col gap-2">
					<div className="font-semibold">Headout</div>
					<div>About Us</div>
					<div>Help</div>
					<div>Careers</div>
					<div>Travel</div>
					<div>Blog</div>
					<div>Company</div>
					<div>Blog</div>
				</div>
				<div className="flex flex-col gap-2">
					<div className="font-semibold">Partners </div>
					<div>Join Headout</div>
					<div>Supply Partner Hub</div>
					<div>Affiliates</div>
				</div>
			</div>

			<div className="flex items-center pt-4">
				<div className="flex flex-1 text-xs font-semibold gap-6 items-center">
					<div>© Headout Inc</div>
					<div>Privacy Policy</div>
					<div>Terms of Usage</div>
				</div>
				<div className="flex items-center gap-8 text-lg">
					<div>
						<i className="fab fa-facebook-f"></i>
					</div>
					<div>
						<i className="fab fa-twitter"></i>
					</div>
					<div>
						<i className="fab fa-instagram"></i>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer
