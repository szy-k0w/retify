import React, { useCallback } from "react";

import ArtistAPI from "services/SpotifyAPI/ArtistAPI";
import InfiniteAlbumsSet from "components/shared/InfiniteAlbumsSet";
import ItemsSet from "components/shared/ItemsSet";
import PropTypes from "prop-types";
import TrackItem from "components/shared/TrackItem";

const Review = ({ id }) => {
	const fetchTopTrack = useCallback(async () => {
		const { tracks } = await ArtistAPI.getTopTracks({ id });

		return {
			items: tracks,
			hasMore: false,
		};
	}, [id]);

	const fetchAlbums = useCallback(
		async ({ offset }) => {
			const data = await ArtistAPI.getAlbums({
				id,
				offset,
				includeGroups: "album",
			});
			const { items, next } = data;
			return {
				items,
				hasMore: Boolean(next),
			};
		},
		[id]
	);

	const renderTracksList = (tracks) => {
		return tracks.map((track) => <TrackItem key={track.id} track={track} />);
	};

	return (
		<React.Fragment>
			<ItemsSet handleFetch={fetchTopTrack}>
				<ItemsSet.Header>Top tracks</ItemsSet.Header>
				<ItemsSet.Content variant="list">{renderTracksList}</ItemsSet.Content>
			</ItemsSet>
			<InfiniteAlbumsSet title="Albums" fetchAlbums={fetchAlbums} />
		</React.Fragment>
	);
};

Review.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Review;
