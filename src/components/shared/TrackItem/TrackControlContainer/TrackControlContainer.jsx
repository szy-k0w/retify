import React from "react";
import PropTypes from "prop-types";

import TrackControl from "./TrackControl";

const TrackControlContainer = ({ id }) => {
	// ADD MUSIC CONTROL FUNCTIONS

	return <TrackControl />;
};

TrackControlContainer.propTypes = {
	id: PropTypes.string.isRequired,
};

TrackControlContainer.defaultProps = {
	id: "",
};

export default TrackControlContainer;
