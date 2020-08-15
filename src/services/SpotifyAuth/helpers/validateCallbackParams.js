const validateCallbackParams = (params) => {
	const { access_token, token_type, expires_in } = params;

	if (access_token && token_type && expires_in) return true;
	return false;
};

export default validateCallbackParams;
