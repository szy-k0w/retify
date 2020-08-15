import React from "react";
import PropTypes from "prop-types";

import "./SubpageContent.sass";

const SubpageContent = ({ children }) => {
	return <main className="subpage-content">{children}</main>;
};

SubpageContent.propTypes = {
	children: PropTypes.node,
};

export default SubpageContent;
