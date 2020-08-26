import React, { useCallback } from "react";

import ArtistAPI from "services/SpotifyAPI/ArtistAPI";
import InfiniteArtistsSet from "components/shared/InfiniteArtistsSet/InfiniteArtistsSet";
import PropTypes from "prop-types";

const RelatedArtists = ({ id }) => {
	const fetchRelatedArtists = useCallback(
		async ({ offset }) => {
			console.log("fetchRelatedArtists");
			const data = await ArtistAPI.getRealatedArtists({ id, offset });
			const { artists } = data;

			return {
				items: artists,
				hasMore: false,
			};
		},
		[id]
	);

	return (
		<InfiniteArtistsSet
			fetchArtists={fetchRelatedArtists}
			title="Related Artists"
		/>
	);
};

RelatedArtists.propTypes = {
	id: PropTypes.string.isRequired,
};

export default RelatedArtists;
