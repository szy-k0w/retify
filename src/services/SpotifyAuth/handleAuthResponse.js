import getHashParams from "helpers/getHashParams";
import validateCallbackParams from "./helpers/validateCallbackParams";

const handleAuthResponse = () => {
	const params = getHashParams();

	if (validateCallbackParams(params)) {
		const { access_token, token_type, expires_in } = params;

		window.localStorage.setItem("accessToken", access_token);
		window.localStorage.setItem("tokenType", token_type);
		window.localStorage.setItem("expiresIn", expires_in);
	}
};

export default handleAuthResponse;
