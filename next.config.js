module.exports = {
	reactStrictMode: false,
	async redirects() {
		return [
			{
				source: "/api/payment/paymentCallback",
				destination: "/dashboard",
				permanent: true,
			},
		];
	},
};
