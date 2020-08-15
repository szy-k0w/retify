import SpotifyAPI from "./SpotifyAPI";

const getSavedAlbums = async ({ offset }) => {
	return await SpotifyAPI({
		url: "/v1/me/albums",
		params: {
			offset,
		},
	}).then((res) => res.data);
};

const LibraryAPI = {
	getSavedAlbums,
};

export default LibraryAPI;
