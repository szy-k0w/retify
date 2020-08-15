import spotifyCredentials from "./config/spotifyCredentials";
import rootAuthUrl from "./config/rootAuthUrl";

const { client_id, redirect_url, response_type, scope } = spotifyCredentials;

const createAuthUrl = () => {
	return `${rootAuthUrl}?client_id=${client_id}&redirect_uri=${redirect_url}&response_type=${response_type}&scope=${scope}`;
};

export default createAuthUrl;
