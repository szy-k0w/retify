import SpotifyAPI from "./SpotifyAPI";

const getRecentlyPlayedTracks = ({ limit = 20 }) => {
	return SpotifyAPI({
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
