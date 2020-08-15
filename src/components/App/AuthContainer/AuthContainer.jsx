import React from "react";

import SpotifyAuth from "services/SpotifyAuth";

import Auth from "./Auth";

const AuthContainer = (props) => {
	const handleAuth = () => {
		window.location.href = SpotifyAuth.createAuthUrl();
	};

	return <Auth handleAuth={handleAuth} />;
};

AuthContainer.propTypes = {};

export default AuthContainer;
