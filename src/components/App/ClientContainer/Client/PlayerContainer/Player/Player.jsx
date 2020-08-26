import React from "react";
import cx from "classnames";

import LoadingSpinner from "components/shared/LoadingSpinner";
import MusicControlContainer from "./MusicControlContainer";

import TrackInfo from "./TrackInfo";
import "./Player.sass";

const Player = ({ isReady, currentTrack }) => {
	const playerClasses = cx({
		player: true,
		"player--loading": !isReady,
	});

	const renderContent = () => {
		if (!isReady) return <LoadingSpinner />;

		return (
			<React.Fragment>
				{currentTrack && <TrackInfo currentTrack={currentTrack} />}
				<MusicControlContainer />
			</React.Fragment>
		);
	};

	return <footer className={playerClasses}>{renderContent()}</footer>;
};

Player.propTypes = {};

export default Player;
