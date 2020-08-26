const { default: SpotifyAPI } = require("./SpotifyAPI");

const getArtist = async ({ id }) => {
	const { data } = await SpotifyAPI({
		method: "get",
		url: `/v1/artists/${id}`,
	});

	return data;
};

const getTopTracks = async ({ id }) => {
	const { data } = await SpotifyAPI({
		url: `/v1/artists/${id}/top-tracks`,
		params: {
			country: "PL",
		},
	});

	return data;
};

const getAlbums = async ({ id, offset = 0, includeGroups }) => {
	const { data } = await SpotifyAPI({
		url: `/v1/artists/${id}/albums`,
		params: {
			offset,
			include_groups: includeGroups,
		},
	});

	return data;
};

const getRealatedArtists = async ({ id, offset = 0 }) => {
	const { data } = await SpotifyAPI({
		url: `/v1/artists/${id}/related-artists`,
		params: {
			offset,
		},
	});

	return data;
};

const ArtistAPI = {
	getArtist,
	getTopTracks,
	getAlbums,
	getRealatedArtists,
};

export default ArtistAPI;
