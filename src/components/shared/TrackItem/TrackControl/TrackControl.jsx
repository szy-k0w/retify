import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlayCircle,
	faPauseCircle,
} from "@fortawesome/free-regular-svg-icons";

import "./TrackControl.sass";

const TrackControl = ({ id, uri, handleAction, isPlaying, isActive }) => {
	const trackControlClasses = cx({
		"track-control": true,
		"track-control--active": isActive,
	});

	const renderIcon = () => {
		if (!isActive || !isPlaying) {
			return (
				<FontAwesomeIcon icon={faPlayCircle} className="track-control__icon" />
			);
		}

		return (
			<FontAwesomeIcon icon={faPauseCircle} className="track-control__icon" />
		);
	};

	return (
		<aside
			onClick={() => handleAction({ id, uri })}
			className={trackControlClasses}
		>
			{renderIcon()}
		</aside>
	);
};

TrackControl.propTypes = {
	id: PropTypes.string.isRequired,
	handleAction: PropTypes.func.isRequired,
	isPlaying: PropTypes.bool.isRequired,
	isActive: PropTypes.bool.isRequired,
};

TrackControl.defaultProps = {
	id: "",
	handleAction: () => {},
	isPlaying: false,
	isActive: false,
};

export default TrackControl;
