const getAuth = () => {
	const auth = {
		accessToken: window.localStorage.getItem("accessToken"),
		tokenType: window.localStorage.getItem("tokenType"),
		expiresIn: window.localStorage.getItem("expiresIn"),
	};

	return auth;
};

export default getAuth;
