import React from "react";
import PropTypes from "prop-types";

import "./Description.sass";

const Description = ({ children }) => {
	return <footer className="card-description">{children}</footer>;
};

Description.propTypes = {
	children: PropTypes.node,
};

export default Description;
