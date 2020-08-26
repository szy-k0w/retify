import React from "react";
import PropTypes from "prop-types";

import "./Type.sass";

const Type = ({ children }) => {
	return <h4 className="header-type">{children}</h4>;
};

Type.propTypes = {
	children: PropTypes.node,
};

export default Type;
