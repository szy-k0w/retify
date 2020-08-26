import SpotifyAPI from "./SpotifyAPI";

const getAlbum = async ({ id }) => {
	const { data } = await SpotifyAPI({
		method: "get",
		url: `/v1/albums/${id}`,
	});
	return data;
};

const getTracks = async ({ id, offset = 0 }) => {
	const { data } = await SpotifyAPI({
		method: "get",
		url: `/v1/albums/${id}/tracks`,
		params: {
			offset,
		},
	});
	return data;
};

const AlbumAPI = {
	getAlbum,
	getTracks,
};

export default AlbumAPI;
