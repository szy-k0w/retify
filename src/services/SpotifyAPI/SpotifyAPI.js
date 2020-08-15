import Axios from "axios";

import { createAuthHeader } from "./helpers/createAuthHeader";

const SpotifyAPI = Axios.create({
	baseURL: "https://api.spotify.com",
	headers: {
		Authorization: createAuthHeader(),
	},
});

export default SpotifyAPI;
