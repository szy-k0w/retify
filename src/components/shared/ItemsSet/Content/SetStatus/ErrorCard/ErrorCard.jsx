import React from "react";
import PropTypes from "prop-types";

import "./ErrorCard.sass";

const ErrorCard = ({ message, status }) => {
	return (
		<div className="error-card">
			<h3 className="error-card__title">Error</h3>
			{status && <h4 className="error-card__status">Status: {status}</h4>}
			<p className="error-card__msg">{message}</p>
		</div>
	);
};

ErrorCard.propTypes = {
	message: PropTypes.string.isRequired,
	status: PropTypes.number,
};

ErrorCard.defaultProps = {
	message: "An error occured",
};

export default ErrorCard;
