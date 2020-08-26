import SpotifyAPI from "./SpotifyAPI";

const getDevices = async () => {
	return await SpotifyAPI({
		method: "get",
		url: "/v1/me/player/devices",
	}).then((res) => res.data);
};

const seek = async ({ position }) => {
	await SpotifyAPI({
		method: "put",
		url: `/v1/me/player/seek`,
		params: {
			device_id: window.localStorage.getItem("deviceId"),
			position_ms: position,
		},
	});
};

const getRecentlyPlayedTracks = async ({ limit = 20 }) => {
	return await SpotifyAPI({
		method: "get",
		url: "/v1/me/player/recently-played",
		params: {
			limit,
		},
	}).then((res) => res.data);
};

const postPlayNext = async () => {
	await SpotifyAPI({
		method: "post",
		url: `/v1/me/player/next`,
		params: {
			device_id: window.localStorage.getItem("deviceId"),
		},
	});
};

const postPlayPrevious = async () => {
	await SpotifyAPI({
		method: "post",
		url: `/v1/me/player/previous`,
		params: {
			device_id: window.localStorage.getItem("deviceId"),
		},
	});
};

const putPlayByContext = async ({ context_uri }) => {
	try {
		await SpotifyAPI({
			method: "put",
			url: "/v1/me/player/play",
			data: {
				context_uri,
			},
			params: {
				device_id: window.localStorage.getItem("deviceId"),
			},
		});
	} catch (error) {
		console.log(error.response);
	}
};

const putPlayByUri = async ({ uri }) => {
	const device_id = window.localStorage.getItem("deviceId");
	console.log(device_id);

	try {
	} catch (error) {}

	await SpotifyAPI({
		method: "put",
		url: "/v1/me/player/play",
		data: {
			uris: [uri],
		},
		params: {
			device_id: window.localStorage.getItem("deviceId"),
		},
	});
};

const putPlayDefault = async () => {
	await SpotifyAPI({
		method: "put",
		url: "/v1/me/player/play",
		params: {
			device_id: window.localStorage.getItem("deviceId"),
		},
	});
};

const putPause = async () => {
	await SpotifyAPI({
		method: "put",
		url: "/v1/me/player/pause",
		params: {
			device_id: window.localStorage.getItem("deviceId"),
		},
	});
};

const PlayerAPI = {
	getDevices,
	seek,
	getRecentlyPlayedTracks,
	postPlayPrevious,
	postPlayNext,
	putPlayByContext,
	putPlayByUri,
	putPlayDefault,
	putPause,
};

export default PlayerAPI;
