import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";
import SpotifyAuth from "services/SpotifyAuth";
import WebPlaybackContext from "./web-playback-context";

const WebPlaybackProvider = ({ children }) => {
	const { accessToken } = SpotifyAuth.getAuth();

	const [isReady, setIsReady] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTrack, setCurrentTrack] = useState(null);
	const [contextUri, setContextUri] = useState(null);
	const [position, setPosition] = useState(0);
	const [duration, setDuration] = useState(0);

	useEffect(() => {
		if (!accessToken) return;

		window.onSpotifyWebPlaybackSDKReady = () => {
			const player = new window.Spotify.Player({
				name: "Retify",
				getOAuthToken: async (callback) => {
					await callback(accessToken);
				},
			});

			(async () => {
				const success = await player.connect();
				if (!success) {
					console.log("Failed to connect.");
					return;
				}

				player.addListener("ready", ({ device_id }) => {
					console.log("Player is ready");
					window.localStorage.setItem("deviceId", device_id);
					setIsReady(true);
				});

				player.addListener("player_state_changed", (state) => {
					const { context, paused, track_window, duration, position } = state;
					const { uri } = context;
					const { current_track } = track_window;
					setIsPlaying(!paused);
					setCurrentTrack(current_track);
					setContextUri(uri);
					setDuration(duration);
					setPosition(position);
				});
			})();
		};
	}, [accessToken]);

	const contextValue = {
		isReady,
		isPlaying,
		currentTrack,
		contextUri,
		duration,
		position,
	};

	return (
		<WebPlaybackContext.Provider value={contextValue}>
			{children}
		</WebPlaybackContext.Provider>
	);
};

WebPlaybackProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default WebPlaybackProvider;
