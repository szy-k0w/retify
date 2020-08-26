import React, { useContext } from "react";

import WebPlaybackContext from "./web-playback-context";

const withWebPlayback = (Base) => {
	const WrappedComponent = (props) => {
		const webPlaybackValue = useContext(WebPlaybackContext);

		return <Base {...props} webPlaybackValue={webPlaybackValue} />;
	};

	WrappedComponent.displayName = "withWebPlayback";

	return WrappedComponent;
};

export default withWebPlayback;
