import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import "./Header.sass";

const Header = ({ children, moreUrl }) => {
	return (
		<header className="items-set-header">
			<h2 className="items-set-header__title">{children}</h2>
			{moreUrl && (
				<NavLink className="items-set-header__more-url" to={moreUrl}>
					Show more
				</NavLink>
			)}
		</header>
	);
};

Header.propTypes = {
	children: PropTypes.node.isRequired,
	moreUrl: PropTypes.string,
};

export default Header;
