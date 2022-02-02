import { useState, useEffect, useContext } from "react";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";
import Modal from "@mui/material/Modal";
import Router from "next/router";
import Calendar from "./Calendar";
import AppContext from "../contexts/AppContext";

function SelectDate() {
	const {date, setDate} = useContext(AppContext);
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	useEffect(() => {
		handleClose();
	}, [date]);
	return (
		<div className="lg:mx-36 w-full lg:w-[60%] py-8">
			<div>
				<div className="text-lg font-semibold mx-2">Select date</div>
				<div className="flex justify-around mt-8 lg:w-[80%]">
					<div className="text-center py-2 px-3 cursor-pointer select-none font-semibold outline outline-0 hover:outline-1 rounded-md focus-within:bg-indigo-500">
						<div className="text-[#888888]">Thu</div>
						<div className="text-[#5f5f5f]">Apr 14</div>
						<div className="text-[#888888]">70</div>
					</div>
					<div className="text-center py-2 px-3 cursor-pointer select-none font-semibold outline outline-0 hover:outline-1 rounded-md">
						<div className="text-[#888888]">Thu</div>
						<div className="text-[#5f5f5f]">Apr 14</div>
						<div className="text-[#888888]">70</div>
					</div>
					<div className="text-center py-2 px-3 cursor-pointer select-none font-semibold outline outline-0 hover:outline-1 rounded-md">
						<div className="text-[#888888]">Thu</div>
						<div className="text-[#5f5f5f]">Apr 14</div>
						<div className="text-[#888888]">70</div>
					</div>
					<div className="text-center py-2 px-3 cursor-pointer select-none font-semibold outline outline-0 hover:outline-1 rounded-md">
						<div className="text-[#888888]">Thu</div>
						<div className="text-[#5f5f5f]">Apr 14</div>
						<div className="text-[#888888]">70</div>
					</div>
					<div className="text-center py-2 px-3 cursor-pointer select-none font-semibold outline outline-0 hover:outline-1 rounded-md">
						<div className="text-[#888888]">Thu</div>
						<div className="text-[#5f5f5f]">Apr 14</div>
						<div className="text-[#888888]">70</div>
					</div>
					<div className="hidden lg:block text-center py-2 px-3 cursor-pointer select-none font-semibold outline outline-0 hover:outline-1 rounded-md">
						<div className="text-[#888888]">Thu</div>
						<div className="text-[#5f5f5f]">Apr 14</div>
						<div className="text-[#888888]">70</div>
					</div>
					<div className="hidden lg:block text-center py-2 px-3 cursor-pointer select-none font-semibold outline outline-0 hover:outline-1 rounded-md">
						<div className="text-[#888888]">Thu</div>
						<div className="text-[#5f5f5f]">Apr 14</div>
						<div className="text-[#888888]">70</div>
					</div>
					<div
						className="text-center py-2 px-3 cursor-pointer select-none font-semibold outline outline-0 hover:outline-1 rounded-md"
						onClick={() => handleOpen()}
					>
						<div className="text-[#888888]">
							<i className="far fa-calendar"></i>
						</div>
						<div className="text-[#353434] underline">
							More
							<br />
							Dates
						</div>
					</div>
				</div>
			</div>
			<Modal open={open} onClose={handleClose}>
				<div className="bg-white w-[95%] lg:w-[50%] z-50 mx-auto mt-10 p-4 rounded-md">
					<Calendar />
				</div>
			</Modal>

			<div className="bg-[#fff8ef] text-[#a4563b] p-4 rounded-lg mt-8">
				<div className="font-bold">
					This experience is available only at this time
				</div>
				<div className="text-xl font-semibold mt-2">7:45 PM</div>
				<div className="text-xs font-bold mt-2">
					<i className="far fa-clock mr-2" />
					Starts at: 7:45 PM
				</div>
				<div className="text-xs font-bold mt-2">
					<i className="fas fa-hourglass-start mr-2"></i>
					Duration: 3 hrs
				</div>
			</div>
			<div className="flex p-4 items-center justify-between fixed bottom-0 bg-white z-40 w-full border-2 lg:relative lg:border-y-[1px] lg:border-x-0 lg:mt-8">
				<div>
					<div className="hidden lg:block font-semibold">
						London Dinner Cruise on the River Thames
					</div>
					<div>
						{date ? format(date, "MMM dd", { locale: enGB }) : "Select a date"},
						07:45 PM
					</div>
				</div>
				<div
					className="text-xl px-8 font-semibold text-white bg-purple-600 text-center py-2 rounded-md cursor-pointer"
					onClick={() => {
						if (!date) {
							return;
						}
						Router.push("/");
					}}
				>
					Next
				</div>
			</div>
		</div>
	);
}

export default SelectDate;
