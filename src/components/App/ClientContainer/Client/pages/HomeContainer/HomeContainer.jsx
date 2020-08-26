import Home from "./Home";
import PersonalizationAPI from "services/SpotifyAPI/PersonalizationAPI";
import PlayerAPI from "services/SpotifyAPI/PlayerAPI";
import React from "react";

const HomeContainer = (props) => {
	const fetchRecentlyPlayed = async () => {
		const data = await PlayerAPI.getRecentlyPlayedTracks({
			limit: 5,
		});
		const { items: fetchedItems } = data;

		return {
			items: fetchedItems.map((pagingTrack) => pagingTrack.track),
			hasMore: false,
		};
	};

	const fetchTopArtists = async ({ offset }) => {
		const data = await PersonalizationAPI.getTopArtists({
			offset,
		});
		const { items, next } = data;

		return {
			items,
			hasMore: Boolean(next),
		};
	};

	return (
		<Home
			fetchRecentlyPlayed={fetchRecentlyPlayed}
			fetchTopArtists={fetchTopArtists}
		/>
	);
};

HomeContainer.propTypes = {};

export default HomeContainer;
