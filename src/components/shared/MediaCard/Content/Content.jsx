import React from "react";
import PropTypes from "prop-types";

import "./Content.sass";

const Content = ({ children }) => {
	return <main className="card-content">{children}</main>;
};

Content.propTypes = {
	children: PropTypes.node,
};

export default Content;
