import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import Link from "./Link";
import "./Navigation.sass";

const Navigation = ({ children, direction }) => {
	const navigationClasses = cx({
		navigation: true,
		"navigation--row": direction === "row",
		"navigation--column": direction === "column",
	});

	return <nav className={navigationClasses}>{children}</nav>;
};

Navigation.propTypes = {
	children: PropTypes.node,
	direction: PropTypes.oneOf(["row", "column"]).isRequired,
};

Navigation.defaultProps = {
	direction: "column",
};

Navigation.Link = Link;

export default Navigation;
