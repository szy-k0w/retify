import React from "react";
import PropTypes from "prop-types";

import withWebPlayback from "components/providers/WebPlaybackContext/withWebPlayback";
import AlbumCard from "./AlbumCard/AlbumCard";
import PlayerAPI from "services/SpotifyAPI/PlayerAPI";

const AlbumCardContainer = ({ album, albumRef, webPlaybackValue }) => {
	const { uri } = album;
	const { isPlaying, contextUri } = webPlaybackValue;

	const isActive = uri === contextUri;
	const isAlbumPlaying = isActive && isPlaying;

	const handleAction = async () => {
		if (isAlbumPlaying) {
			await PlayerAPI.putPause();
		} else {
			await PlayerAPI.putPlayByContext({ context_uri: uri });
		}
	};

	return (
		<AlbumCard
			album={album}
			albumRef={albumRef}
			handleAction={handleAction}
			isPlaying={isAlbumPlaying}
			isActive={isActive}
		/>
	);
};

AlbumCardContainer.propTypes = {
	album: PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		images: PropTypes.arrayOf(
			PropTypes.shape({
				url: PropTypes.string.isRequired,
			})
		).isRequired,
		artists: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.string.isRequired,
				name: PropTypes.string.isRequired,
			})
		).isRequired,
		uri: PropTypes.string.isRequired,
	}).isRequired,
	albumRef: PropTypes.func.isRequired,
	// TODO: ADD TYPES
	webPlaybackValue: PropTypes.shape({}).isRequired,
};

export default withWebPlayback(AlbumCardContainer);
