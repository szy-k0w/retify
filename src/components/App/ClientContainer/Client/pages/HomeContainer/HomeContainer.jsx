import React from "react";

import PlayerAPI from "services/SpotifyAPI/PlayerAPI";

import Home from "./Home";

const HomeContainer = (props) => {
	const fetchRecentlyPlayed = async () => {
		const data = await PlayerAPI.getRecentlyPlayedTracks({
			limit: 5,
		});
		const { items: fetchedItems, next } = data;

		return {
			items: fetchedItems.map((pagingTrack) => pagingTrack.track),
			hasMore: Boolean(next),
		};
	};

	return <Home fetchRecentlyPlayed={fetchRecentlyPlayed} />;
};

HomeContainer.propTypes = {};

export default HomeContainer;
