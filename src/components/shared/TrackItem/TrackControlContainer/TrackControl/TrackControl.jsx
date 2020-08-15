import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlayCircle,
	faStopCircle,
} from "@fortawesome/free-regular-svg-icons";

import "./TrackControl.sass";

const TrackControl = ({ handleClick, isPlaying, isActive }) => {
	const renderIcon = () => {
		if (!isActive || !isPlaying) {
			return (
				<FontAwesomeIcon icon={faPlayCircle} className="track-control__icon" />
			);
		}

		return (
			<FontAwesomeIcon icon={faStopCircle} className="track-control__icon" />
		);
	};

	return (
		<aside onClick={handleClick} className="track-control">
			{renderIcon()}
		</aside>
	);
};

TrackControl.propTypes = {
	handleClick: PropTypes.func.isRequired,
	isPlaying: PropTypes.bool.isRequired,
	isActive: PropTypes.bool.isRequired,
};

TrackControl.defaultProps = {
	handleClick: () => {},
	isPlaying: false,
	isActive: false,
};

export default TrackControl;
