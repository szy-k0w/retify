import SpotifyAPI from "./SpotifyAPI";

const getTopArtists = async ({ offset = 0 }) => {
	return await SpotifyAPI({
		url: "/v1/me/top/artists",
		params: {
			offset,
		},
	}).then((res) => res.data);
};

const PersonalizationAPI = {
	getTopArtists,
};

export default PersonalizationAPI;
