import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlayCircle,
	faPauseCircle,
} from "@fortawesome/free-regular-svg-icons";

import "./Header.sass";

const Header = ({ children, isPlaying, handleAction }) => {
	const renderIcon = () => {
		if (isPlaying)
			return (
				<FontAwesomeIcon className="card-header__icon" icon={faPauseCircle} />
			);

		return (
			<FontAwesomeIcon className="card-header__icon" icon={faPlayCircle} />
		);
	};

	return (
		<header className="card-header">
			<div onClick={handleAction} className="card-header__icon-wrapper">
				{renderIcon()}
			</div>
			{children}
		</header>
	);
};

Header.propTypes = {
	children: PropTypes.node,
	isPlaying: PropTypes.bool.isRequired,
	handleAction: PropTypes.func.isRequired,
};

Header.defaultProps = {
	isPlaying: false,
	isActive: false,
	handleAction: () => {},
};

export default Header;
