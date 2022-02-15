import { useState, useEffect, useContext } from "react";
import { compareAsc, parseISO, format } from "date-fns";
import AppContext from "../contexts/AppContext";

export default function dashboard() {
	const [orderList, setOrderList] = useState(null);
	const [upcoming, setUpcoming] = useState(new Array());
	const [previous, setPrevious] = useState(new Array());
	const [current, setCurrent] = useState(new Array());

	const { user } = useContext(AppContext);
	useEffect(() => {
		if (!user || !localStorage.getItem(user.email)) {
			return;
		}
		setOrderList(JSON.parse(localStorage.getItem(user.email)).allOrders);
	}, [user]);

	useEffect(() => {
		setUpcoming(new Array());
		setPrevious(new Array());
		setCurrent(new Array());

		if (!orderList) {
			return;
		}

		let currentDate = new Date();

		let tempUpcoming = [];
		let tempCurrent = [];
		let tempPrevious = [];

		orderList.map((item) => {
			if (compareAsc(parseISO(item.date), currentDate) === -1) {
				tempPrevious.push(item);
			} else if (compareAsc(item.date, currentDate) === 0) {
				tempCurrent.push(item);
			} else {
				tempUpcoming.push(item);
			}
		});

		setUpcoming(tempUpcoming);
		setPrevious(tempPrevious);
		setCurrent(tempCurrent);
	}, [orderList]);

	return (
		<div className="lg:p-16 p-8">
			<div className="font-bold text-2xl">Welcome,</div>
			{user && (
				<div>
					<div className="text-gray-600 font-semibold text-xl my-4">
						Current trips
					</div>
					{current &&
						current.map((item, index) => (
							<div
								key={index}
								className="flex items-center gap-8 px-8 py-3 bg-gray-100 w-[99%] my-4 lg:w-[35%] mx-auto justify-evenly rounded-md shadow-md"
							>
								<div>{format(parseISO(item.date), "d MMM yyyy")}</div>
								<div className="font-semibold text-slate-700">
									{item.guest.adult > 0 && (
										<div>
											{item.guest.adult} Adult{item.guest.adult > 1 && "s"}
										</div>
									)}
									{item.guest.child > 0 && (
										<div>
											{item.guest.child} Child{item.guest.child > 1 && "ren"}
										</div>
									)}
								</div>
								<div className="flex gap-2 font-bold text-xl">
									<div>Total</div>
									<div>
										&#8377; {item.guest.adult * 95 + item.guest.child * 70}
									</div>
								</div>
							</div>
						))}
					{current.length === 0 && <div>No current trips</div>}
					<div className="text-gray-600 font-semibold text-xl my-4 mt-8">
						Upcoming trips
					</div>
					{upcoming &&
						upcoming.map((item, index) => (
							<div
								key={index}
								className="flex items-center gap-8 px-8 py-3 bg-gray-100 w-[99%] my-4 lg:w-[35%] mx-auto justify-evenly rounded-md shadow-md"
							>
								<div>{format(parseISO(item.date), "d MMM yyyy")}</div>
								<div className="font-semibold text-slate-700">
									{item.guest.adult > 0 && (
										<div>
											{item.guest.adult} Adult{item.guest.adult > 1 && "s"}
										</div>
									)}
									{item.guest.child > 0 && (
										<div>
											{item.guest.child} Child{item.guest.child > 1 && "ren"}
										</div>
									)}
								</div>
								<div className="flex gap-2 font-bold text-xl">
									<div>Total</div>
									<div>
										&#8377; {item.guest.adult * 95 + item.guest.child * 70}
									</div>
								</div>
							</div>
						))}
					{upcoming.length === 0 && <div>No upcoming trips</div>}
					<div className="text-gray-600 font-semibold text-xl my-4 mt-8">
						Previous trips
					</div>
					{previous &&
						previous.map((item, index) => (
							<div
								key={index}
								className="flex items-center gap-8 px-8 py-3 bg-gray-100 w-[99%] my-4 lg:w-[35%] mx-auto justify-evenly rounded-md shadow-md"
							>
								<div>{format(parseISO(item.date), "d MMM yyyy")}</div>
								<div className="font-semibold text-slate-700">
									{item.guest.adult > 0 && (
										<div>
											{item.guest.adult} Adult{item.guest.adult > 1 && "s"}
										</div>
									)}
									{item.guest.child > 0 && (
										<div>
											{item.guest.child} Child{item.guest.child > 1 && "ren"}
										</div>
									)}
								</div>
								<div className="flex gap-2 font-bold text-xl">
									<div>Total</div>
									<div>
										&#8377; {item.guest.adult * 95 + item.guest.child * 70}
									</div>
								</div>
							</div>
						))}
					{previous.length === 0 && <div>No previous trips</div>}
				</div>
			)}
			{!user && <div>Please login to see your dashboard</div>}
		</div>
	);
}
