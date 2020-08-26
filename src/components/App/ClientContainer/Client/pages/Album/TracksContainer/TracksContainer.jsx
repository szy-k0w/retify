import AlbumAPI from "services/SpotifyAPI/AlbumAPI";
import PropTypes from "prop-types";
import React from "react";
import Tracks from "./Tracks";
import withIdParameter from "components/hoc/withIdParameter";

const TracksContainer = ({ id }) => {
	const fetchTracks = async ({ offset }) => {
		const data = await AlbumAPI.getTracks({ id, offset });
		const { items, next } = data;

		return {
			items,
			hasMore: Boolean(next),
		};
	};

	return <Tracks fetchTracks={fetchTracks} />;
};

TracksContainer.propTypes = {
	id: PropTypes.string.isRequired,
};

export default withIdParameter(TracksContainer);
