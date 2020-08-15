import React from "react";
import PropTypes from "prop-types";

import mapMsToDisplayForm from "helpers/mapMsToDisplayForm";

import "./TrackDuration.sass";

const TrackDuration = ({ duration }) => {
	return (
		<aside className="track-duration">{mapMsToDisplayForm(duration)}</aside>
	);
};

TrackDuration.propTypes = {
	duration: PropTypes.number.isRequired,
};

TrackDuration.defaultProps = {
	duration: 0,
};

export default TrackDuration;
