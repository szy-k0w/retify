import "./MusicControl.sass";

import {
	faPauseCircle,
	faPlayCircle,
} from "@fortawesome/free-regular-svg-icons";
import {
	faStepBackward,
	faStepForward,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React from "react";
import mapMsToDisplayForm from "helpers/mapMsToDisplayForm";

const MusicControl = ({
	isPlaying,
	position,
	duration,
	handlePlayPrevious,
	handleAction,
	handleSeek,
	handlePlayNext,
}) => {
	return (
		<main className="music-control">
			<div className="action-buttons">
				<FontAwesomeIcon
					className="action-buttons__aside-icon"
					icon={faStepBackward}
					onClick={handlePlayPrevious}
				/>
				<FontAwesomeIcon
					className="action-buttons__main-icon"
					icon={isPlaying ? faPauseCircle : faPlayCircle}
					onClick={handleAction}
				/>
				<FontAwesomeIcon
					className="action-buttons__aside-icon"
					icon={faStepForward}
					onClick={handlePlayNext}
				/>
			</div>
			<div className="progress-bar-wrapper">
				<p className="progress-bar-wrapper__duration">
					{mapMsToDisplayForm(position)}
				</p>
				<input
					className="progress-bar-wrapper__bar"
					onDragEnd={handleSeek}
					type="range"
					value={position}
					step={1}
					min={0}
					max={duration}
				/>
				<p className="progress-bar-wrapper__duration">
					{mapMsToDisplayForm(duration)}
				</p>
			</div>
		</main>
	);
};

MusicControl.propTypes = {
	isPlaying: PropTypes.bool.isRequired,
	handlePlayPrevious: PropTypes.func.isRequired,
	handleAction: PropTypes.func.isRequired,
	handlePlayNext: PropTypes.func.isRequired,
};

export default MusicControl;
