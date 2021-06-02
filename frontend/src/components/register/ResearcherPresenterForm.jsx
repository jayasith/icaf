import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { RegisterDataContext } from "../../context/RegisterFormContext";

const PresenterForm = ({ title }) => {
	const { setCurrentStep, userData, setUserData } =
		useContext(RegisterDataContext);
	const allowedTypes = [
		"application/pdf",
		"application/x-zip-compressed",
		"application/vnd.openxmlformats-officedocument.presentationml.presentation",
		"application/vnd.ms-powerpoint",
	];
	const [file, setFile] = useState(null);
	const [error, setError] = useState(null);

	const uploadHandler = (e) => {
		const selectedFile = e.target.files[0];
		console.log(selectedFile);

		if (selectedFile && allowedTypes.includes(selectedFile.type)) {
			setFile(selectedFile);
			setError("");
		} else {
			setFile(null);
			setError(
				"Select valid type. (only pdf, presentation and zip files are allowed)"
			);
		}
	};

	return (
		<div className="register-content">
			<h1>{title} Registration</h1>
			<motion.form
				className="login-form"
				initial={{ x: 300, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ type: "tween", duration: 0.8 }}
			>
				<motion.div
					className="user-credentials"
					initial={{ x: 100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ type: "tween", duration: 0.8, delay: 0.2 }}
				>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						id="email"
						required
						autoComplete="off"
					/>
					<label htmlFor="mobile-number">Contact Number</label>
					<input
						type="tel"
						name="mobile-number"
						id="mobile-number"
						required
						maxLength="10"
						autoComplete="off"
					/>
					<div className="name-info">
						<div className="first-name">
							<label htmlFor="university">University</label>
							<input
								type="text"
								name="university"
								id="university"
								required
								autoComplete="off"
							/>
						</div>
						<div className="last-name">
							<label htmlFor="department">Department</label>
							<input
								type="text"
								name="department"
								id="department"
								required
								autoComplete="off"
								maxLength="3"
							/>
						</div>
					</div>
					<div className="last-name">
						<label htmlFor="department">Upload your materials</label>
						<input
							type="file"
							accept=".pdf, .zip, .rar, .ppt, .pptx"
							name="department"
							id="department"
							required
							autoComplete="off"
							maxLength="3"
							onChange={uploadHandler}
						/>
					</div>
					<div>{error && <div className="error">{error}</div>}</div>
				</motion.div>
				<div className="button-container">
					<motion.button
						className="gradient-cta transparent"
						initial={{ x: 10, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ type: "tween", duration: 0.8, delay: 0.5 }}
						onClick={() => setCurrentStep(1)}
					>
						Back
					</motion.button>
					<motion.button
						type="submit"
						className="gradient-cta"
						initial={{ x: 10, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ type: "tween", duration: 0.8, delay: 0.5 }}
					>
						Register
					</motion.button>
				</div>
			</motion.form>
		</div>
	);
};

export default PresenterForm;
