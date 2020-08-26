import { createContext } from "react";

const initialValue = {
	isReady: false,
	isPlaying: false,
	currentTrack: null,
	contextUri: null,
	duration: 0,
};

const WebPlaybackContext = createContext(initialValue);

export default WebPlaybackContext;
