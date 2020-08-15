import SpotifyAPI from "./SpotifyAPI";

const getRecentlyPlayedTracks = async ({ limit = 20 }) => {
	return await SpotifyAPI({
		url: "/v1/me/player/recently-played",
		params: {
			limit,
		},
	}).then((res) => res.data);
};

const PlayerAPI = {
	getRecentlyPlayedTracks,
};

export default PlayerAPI;
