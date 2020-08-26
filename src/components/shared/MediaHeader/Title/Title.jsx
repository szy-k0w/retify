import React from "react";
import PropTypes from "prop-types";

import "./Title.sass";

const Title = ({ children }) => {
	return <h1 className="header-title">{children}</h1>;
};

Title.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Title;
