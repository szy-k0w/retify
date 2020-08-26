import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import cx from "classnames";

import "./Title.sass";

const Title = ({ children, to, isActive }) => {
	const cardTitleCasses = cx({
		"card-title": true,
		"card-title--active": isActive,
	});

	return (
		<NavLink className={cardTitleCasses} to={to}>
			{children}
		</NavLink>
	);
};

Title.propTypes = {
	children: PropTypes.node,
	to: PropTypes.string.isRequired,
	isActive: PropTypes.bool.isRequired,
};

Title.defaultProps = {
	to: "",
	isActive: false,
};

export default Title;
