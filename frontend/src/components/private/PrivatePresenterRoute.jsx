import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { getUserType } from "../../auth/userAuth";

import { RegisterDataContext } from "../../context/Context";

const PrivatePresenterRoute = ({ children, ...rest }) => {
	const { isLogin } = useContext(RegisterDataContext);
	const userType = getUserType();

	return (
		<Route
			{...rest}
			render={() => {
				return isLogin && userType === "presenter" ? (
					children
				) : (
					<Redirect to={`/auth/user/${userType}/dashboard`} />
				);
			}}
		/>
	);
};

export default PrivatePresenterRoute;
