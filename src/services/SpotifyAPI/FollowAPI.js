import SpotifyAPI from "./SpotifyAPI";

const getFollowedArtists = async ({ after }) => {
	return await SpotifyAPI({
		url: "/v1/me/following",
		params: {
			type: "artist",
			after,
		},
	}).then((res) => res.data);
};

const FollowAPI = {
	getFollowedArtists,
};

export default FollowAPI;
