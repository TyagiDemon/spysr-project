import React, { useContext, useState } from "react";
import {
	addDays,
	addMonths,
	compareAsc,
	endOfMonth,
	endOfWeek,
	format,
	isSameDay,
	isSameMonth,
	startOfMonth,
	startOfWeek,
	subMonths,
} from "date-fns";
import AppContext from "../contexts/AppContext";

function Calendar() {
	const [state, setState] = useState({
		currentMonth: new Date(),
		selectedDate: new Date(),
		currentDate: new Date(),
	});

	const { date, setDate } = useContext(AppContext);

	function renderHeader() {
		const dateFormat = "MMM yyyy";

		return (
			<div className="header row flex-middle">
				<div className="col col-start">
					<div className="icon" onClick={prevMonth}>
						chevron_left
					</div>
				</div>
				<div className="col col-center">
					<span>{format(state.currentMonth, dateFormat)}</span>
				</div>
				<div className="col col-end" onClick={nextMonth}>
					<div className="icon">chevron_right</div>
				</div>
			</div>
		);
	}

	function renderDays() {
		const dateFormat = "EEE";
		const days = [];

		let startDate = startOfWeek(state.currentMonth);

		for (let i = 0; i < 7; i++) {
			days.push(
				<div className="col col-center" key={i}>
					{format(addDays(startDate, i), dateFormat)}
				</div>
			);
		}

		return <div className="days row">{days}</div>;
	}

	function renderCells() {
		const monthStart = startOfMonth(state.currentMonth);
		const monthEnd = endOfMonth(monthStart);
		const startDate = startOfWeek(monthStart);
		const endDate = endOfWeek(monthEnd);

		const dateFormat = "d";
		const rows = [];

		let days = [];
		let day = startDate;
		let formattedDate = "";

		while (day <= endDate) {
			for (let i = 0; i < 7; i++) {
				formattedDate = format(day, dateFormat);
				const cloneDay = day;
				days.push(
					<div
						className={`col ${
							!isSameMonth(cloneDay, monthStart) || compareAsc(state.currentDate, cloneDay) == 1
								? "disabled"
								: isSameDay(cloneDay, date)
								? "selected bg-gradient-to-br from-blue-300 via-white to-blue-200"
								: ""
						}`}
						key={cloneDay}
						onClick={() => {
							setDate(cloneDay);
							setState({ ...state, selectedDate: cloneDay });
						}}
					>
						<div className="text-center px-1 cursor-pointer">
							<div className="number my-4">{formattedDate}</div>
							{/* <div className="bg">{formattedDate}</div> */}
							<div className="text-xs">100 seats left</div>
						</div>
					</div>
				);
				day = addDays(day, 1);
			}
			rows.push(
				<div className="row" key={day}>
					{days}
				</div>
			);
			days = [];
		}
		return <div className="body">{rows}</div>;
	}

	const nextMonth = () => {
		setState({ ...state, currentMonth: addMonths(state.currentMonth, 1) });
	};

	const prevMonth = () => {
		setState({ ...state, currentMonth: subMonths(state.currentMonth, 1) });
	};

	return (
		<div className="calendar w-full">
			{renderHeader()}
			{renderDays()}
			{renderCells()}
		</div>
	);
}

export default Calendar;
