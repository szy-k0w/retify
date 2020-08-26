import React from "react";
import PropTypes from "prop-types";

import "./Detail.sass";

const Detail = ({ children }) => {
	return <footer className="header-detail">{children}</footer>;
};

Detail.propTypes = {
	children: PropTypes.node,
};

export default Detail;
