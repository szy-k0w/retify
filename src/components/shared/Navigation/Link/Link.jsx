import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import "./Link.sass";

const Link = ({ children, to }) => {
	return (
		<NavLink className="link" to={to}>
			{children}
		</NavLink>
	);
};

Link.propTypes = {
	children: PropTypes.node,
	to: PropTypes.string.isRequired,
};

Link.defaultProps = {
	to: "",
};

export default Link;
