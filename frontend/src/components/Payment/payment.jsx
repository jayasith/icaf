import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { MdCreditCard, MdLockOutline, MdDateRange } from "react-icons/md";
import "./payment.css";
import { BASE_URL } from "../../config/config";
import { getUserToken } from "../../auth/userAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const payment = () => {
	const [CardDetails, setCardDetails] = useState("");
	const { id } = useParams();
	const paymenthandle = async (e) => {
		e.preventDefault();

		const res = await fetch(`${BASE_URL}/publication/pay/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				authToken: getUserToken(),
			},
		});
		if (res.ok) {
			toast.success("payment successful");
		}
	};

	return (
		<div>
			<form className="cdForm" onSubmit={(e) => paymenthandle(e)}>
				<h1 className="h1">Publication Payment</h1>
				<div className="fee">
					<h4>Submission Fee - LKR 800.00</h4>
				</div>
				<br />
				<div className="card">
					<label className="lables">Card Number</label>
					<br />
					<input
						type="number"
						maxLength="16"
						placeholder="xxxx-xxxx-xxxx-xxxx"
						onChange={(e) =>
							setCardDetails({ ...CardDetails, number: e.target.value })
						}
						className="numberInput"
						required
					/>
					<MdCreditCard className="cardIcon" />
					<br />
					<label className="lables">Expiration Date</label>
					<label className="cvc">CVC</label>
					<br />
					<input
						type="text"
						placeholder="(MM/YY)"
						onChange={(e) =>
							setCardDetails({ ...CardDetails, date: e.target.value })
						}
						className="dateInput"
						required
					/>
					<MdDateRange className="dateIcon" />
					<input
						type="number"
						placeholder="cvc"
						maxLength="3"
						onChange={(e) =>
							setCardDetails({ ...CardDetails, cvc: e.target.value })
						}
						className="cvcInput"
						required
					/>
					<MdLockOutline className="lockIcon" />
					<br />
					<button
						type="submit"
						onClick={console.log("onclick")}
						className="payBt"
					>
						Pay
					</button>
				</div>
			</form>
			<ToastContainer position="top-center" />
		</div>
	);
};

export default payment;
