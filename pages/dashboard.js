import { useState, useEffect, useContext } from "react";
import { getSession } from "next-auth/react";
import AppContext from "../contexts/AppContext";

export default function dashboard() {
	const [orderList, setOrderList] = useState(null);
	const { user } = useContext(AppContext);
	useEffect(() => {
		if (!user || !localStorage.getItem(user.email)) {
			return;
		}
		setOrderList(JSON.parse(localStorage.getItem(user.email)).allOrders);
	}, []);

	return (
		<div className="lg:p-16 p-8">
			<div className="font-bold text-2xl">Welcome,</div>
			<div>
				<div className="text-gray-600 font-semibold text-xl my-4">
					Your previous orders
				</div>

				{orderList &&
					orderList.map((item, index) => (
						<div
							key={index}
							className="flex items-center gap-8 px-8 py-3 bg-gray-100 w-[99%] my-4 lg:w-[35%] mx-auto justify-evenly rounded-md shadow-md"
						>
							<div className="font-semibold text-slate-700">
								{item.adult > 0 && (
									<div>
										{item.adult} Adult{item.adult > 1 && "s"}
									</div>
								)}
								{item.child > 0 && (
									<div>
										{item.child} Child{item.child > 1 && "ren"}
									</div>
								)}
							</div>
							<div className="flex gap-2 font-bold text-xl">
								<div>Total</div>
								<div>&#8377; {item.adult * 95 + item.child * 70}</div>
							</div>
						</div>
					))}
				{!orderList && <div>No orders to display</div>}
			</div>
		</div>
	);
}

// export async function getServerSideProps(context) {
// 	const session = await getSession(context);
// 	if (!session) {
// 		context.res.writeHead(302, { Location: "/" });
// 		context.res.end();
// 		return {};
// 	}
// 	return {
// 		props: {
// 			user: session.user,
// 		},
// 	};
// }
