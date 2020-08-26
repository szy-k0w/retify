import React from "react";
import Player from "./Player";
import withWebPlayback from "components/providers/WebPlaybackContext/withWebPlayback";

const PlayerContainer = ({ webPlaybackValue }) => {
	const { isReady, currentTrack } = webPlaybackValue;

	return <Player isReady={isReady} currentTrack={currentTrack} />;
};

PlayerContainer.propTypes = {};

export default withWebPlayback(PlayerContainer);
