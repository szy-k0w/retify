import React from "react";
import { Redirect } from "react-router";

import SpotifyAuth from "services/SpotifyAuth";

const withAuthValidation = (Base) => {
	const WrappedComponent = (props) => {
		const auth = SpotifyAuth.getAuth();

		if (!auth.accessToken) return <Redirect to="/auth" />;

		return <Base {...props} />;
	};

	WrappedComponent.displayName = "withAuthValidation";

	return WrappedComponent;
};

export default withAuthValidation;
