import React from "react";
import PropTypes from "prop-types";

import "./Type.sass";

const Type = ({ children }) => {
	return <h5 className="card-type">{children}</h5>;
};

Type.propTypes = {
	children: PropTypes.node,
};

export default Type;
