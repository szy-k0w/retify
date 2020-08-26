import React from "react";

import LibraryAPI from "services/SpotifyAPI/LibraryAPI";

import Library from "./Library";
import FollowAPI from "services/SpotifyAPI/FollowAPI";

const LibraryContainer = (props) => {
	const fetchFollowedArtists = async ({ lastItem }) => {
		const data = await FollowAPI.getFollowedArtists({
			after: lastItem ? lastItem.id : null,
		});
		const { items, next } = data.artists;
		return {
			items,
			hasMore: Boolean(next),
		};
	};

	const fetchSavedAlbums = async ({ offset }) => {
		const data = await LibraryAPI.getSavedAlbums({ offset });
		const { items: fetchedItems, next } = data;
		return {
			items: fetchedItems.map((pagingTrack) => pagingTrack.album),
			hasMore: Boolean(next),
		};
	};

	return (
		<Library
			fetchFollowedArtists={fetchFollowedArtists}
			fetchSavedAlbums={fetchSavedAlbums}
		/>
	);
};

LibraryContainer.propTypes = {};

export default LibraryContainer;
