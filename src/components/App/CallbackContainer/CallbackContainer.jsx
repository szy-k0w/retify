import React, { useEffect } from "react";
import PropTypes from "prop-types";

import SpotifyAuth from "services/SpotifyAuth";

import Callback from "./Callback";
import { withRouter } from "react-router";

const CallbackContainer = ({ history }) => {
	useEffect(() => {
		SpotifyAuth.handleAuthResponse();
		const auth = SpotifyAuth.getAuth();

		if (auth.accessToken) {
			history.push("/client");
		} else {
			history.push("/auth");
		}
	}, [history]);

	return <Callback />;
};

CallbackContainer.propTypes = {
	history: PropTypes.object.isRequired,
};

export default withRouter(CallbackContainer);
