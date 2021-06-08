import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BASE_URL } from "../../config/config";

const LoginForm = () => {
	const [loginUser, setLoginUser] = useState({});
	const history = useHistory();

	const handleLogin = async (e) => {
		e.preventDefault();

		const response = await fetch(`${BASE_URL}/auth/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(loginUser),
		});
		const userAuth = await response.json();
		console.log(userAuth);

		if (userAuth) {
			let location;

			switch (userAuth.userType) {
				case "admin":
					location = "user/admin/dashboard";
					break;
				case "editor":
					location = "user/editor/dashboard";
					break;
				case "reviewer":
					location = "user/reviewer/dashboard";
					break;
				case "attendee":
					location = "user/attendee/dashboard";
					break;
				case "researcher":
					location = "user/researcher/dashboard";
					break;
				case "presenter":
					location = "user/presenter/dashboard";
					break;
			}

			localStorage.setItem("token", userAuth.authToken);
			history.push(location);
		} else {
			toast.error("Your username or password is invalid");
		}
	};

	return (
		<div className="login-content">
			<ToastContainer
				position="top-center"
				autoClose={3000}
				hideProgressBar
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<h1>Login</h1>
			<motion.form
				className="login-form"
				onSubmit={handleLogin}
				initial={{ y: 100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ type: "tween", duration: 0.8 }}
			>
				<motion.div
					className="user-credentials"
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ type: "tween", duration: 0.8, delay: 0.2 }}
				>
					<label htmlFor="username">Username</label>
					<input
						type="username"
						name="username"
						id="username"
						required
						autoComplete="off"
						value={loginUser.username}
						onChange={(e) =>
							setLoginUser({ ...loginUser, username: e.target.value })
						}
					/>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						id="password"
						value={loginUser.password}
						required
						autoComplete="off"
						onChange={(e) =>
							setLoginUser({ ...loginUser, password: e.target.value })
						}
					/>
				</motion.div>
				<motion.div
					className="user-type-selection"
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ type: "tween", duration: 0.8, delay: 0.3 }}
				>
					<div className="researcher">
						<input
							type="radio"
							name="user-type"
							id="researcher"
							value="researcher"
							onClick={() =>
								setLoginUser({ ...loginUser, userType: "researcher" })
							}
						/>
						<label htmlFor="researcher">Researcher</label>
					</div>
					<div className="presenter">
						<input
							type="radio"
							name="user-type"
							id="presenter"
							value="presenter"
							onClick={() =>
								setLoginUser({ ...loginUser, userType: "presenter" })
							}
						/>
						<label htmlFor="presenter">Presenter</label>
					</div>
					<div className="attendee">
						<input
							type="radio"
							name="user-type"
							id="attendee"
							value="attendee"
							onClick={() =>
								setLoginUser({ ...loginUser, userType: "attendee" })
							}
						/>
						<label htmlFor="attendee">Attendee</label>
					</div>
				</motion.div>
				<motion.p
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ type: "tween", duration: 0.8, delay: 0.4 }}
				>
					Haven't registered yet ?
					<Link to="/auth/register" className="register-now">
						Register
					</Link>
				</motion.p>
				<motion.button
					type="submit"
					className="gradient-cta"
					initial={{ y: 10, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ type: "tween", duration: 0.8, delay: 0.5 }}
				>
					Login
				</motion.button>
			</motion.form>
		</div>
	);
};

export default LoginForm;
