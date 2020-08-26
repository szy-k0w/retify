import Axios from "axios";
import { createAuthHeader } from "./helpers/createAuthHeader";

const SpotifyAPI = Axios.create({
	baseURL: "https://api.spotify.com",
});

SpotifyAPI.interceptors.request.use((config) => {
	config.headers = {
		Authorization: createAuthHeader(),
	};
	return config;
});

export default SpotifyAPI;
