import React, { useEffect, useState } from "react";

import MusicControl from "./MusicControl";
import PlayerAPI from "services/SpotifyAPI/PlayerAPI";
import PropTypes from "prop-types";
import withWebPlayback from "components/providers/WebPlaybackContext/withWebPlayback";

const MusicControlContainer = ({ webPlaybackValue }) => {
	const { isPlaying, isReady, duration, position } = webPlaybackValue;
	const [currentPosition, setCurrentPosition] = useState(position);

	const handleAction = async () => {
		if (!isReady) return;

		if (isPlaying) {
			await PlayerAPI.putPause();
		} else {
			await PlayerAPI.putPlayDefault();
		}
	};

	const handleSeek = async (e) => {
		const newPosition = e.target.value;

		await PlayerAPI.seek({ position: newPosition });
	};

	useEffect(() => {
		setCurrentPosition(position);
	}, [position]);

	useEffect(() => {
		let interval = null;

		if (isPlaying) {
			interval = setInterval(() => {
				setCurrentPosition((currentPosition) => currentPosition + 1000);
			}, 1000);
		} else if (!isPlaying && currentPosition !== 0) {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [isPlaying, currentPosition]);

	return (
		<MusicControl
			position={currentPosition}
			duration={duration}
			isPlaying={isPlaying && isReady}
			handleAction={handleAction}
			handleSeek={handleSeek}
			handlePlayPrevious={PlayerAPI.postPlayPrevious}
			handlePlayNext={PlayerAPI.postPlayNext}
		/>
	);
};

MusicControlContainer.propTypes = {
	webPlaybackValue: PropTypes.shape({
		isPlaying: PropTypes.bool.isRequired,
		isReady: PropTypes.bool.isRequired,
		duration: PropTypes.number.isRequired,
	}).isRequired,
};

export default withWebPlayback(MusicControlContainer);
