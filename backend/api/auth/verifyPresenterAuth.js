const jwt = require("jsonwebtoken");

const verifyPresenterAuth = async (request, response, next) => {
	const authToken = request.header("authToken");

	if (!authToken) {
		return response.status(401).json({ message: "Access denied" });
	}

	try {
		const verified = await jwt.verify(authToken, process.env.JWT_SECRET);

		if (verified.userType === "presenter") {
			request.user = verified;
			next();
		} else {
			response.status(401).json({ message: "Access denied" });
		}
	} catch (error) {
		response.status(400).json({ message: "Invalid token" });
	}
};

module.exports = verifyPresenterAuth;
