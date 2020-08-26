import ArtistCard from "./ArtistCard";
import PlayerAPI from "services/SpotifyAPI/PlayerAPI";
import PropTypes from "prop-types";
import React from "react";
import withWebPlayback from "components/providers/WebPlaybackContext/withWebPlayback";

const ArtistCardContainer = ({ artist, artistRef, webPlaybackValue }) => {
	const { uri } = artist;
	const { isPlaying, contextUri } = webPlaybackValue;

	const isActive = uri === contextUri;
	const isArtistPlaying = isActive && isPlaying;

	const handleAction = async () => {
		if (isArtistPlaying) {
			await PlayerAPI.putPause();
		} else {
			await PlayerAPI.putPlayByContext({ context_uri: uri });
		}
	};

	return (
		<ArtistCard
			artist={artist}
			artistRef={artistRef}
			handleAction={handleAction}
			isPlaying={isArtistPlaying}
			isActive={isActive}
		/>
	);
};

ArtistCardContainer.propTypes = {
	artist: PropTypes.shape().isRequired,
	artistRef: PropTypes.func.isRequired,
};

ArtistCardContainer.defaultProps = {
	artistRef: () => {},
};

export default withWebPlayback(ArtistCardContainer);
