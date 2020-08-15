import React from "react";
import PropTypes from "prop-types";

import "./Auth.sass";

const Auth = ({ handleAuth }) => {
	return (
		<div className="auth">
			<article className="auth-card">
				<h1 className="auth-card__title">Log In with Spotify</h1>
				<button className="auth-card__btn" onClick={handleAuth}>
					Login
				</button>
			</article>
		</div>
	);
};

Auth.defaultProps = {
	handleAuth: () => {},
};

Auth.propTypes = {
	handleAuth: PropTypes.func.isRequired,
};

export default Auth;
