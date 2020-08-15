import SpotifyAuth from "services/SpotifyAuth";

export const createAuthHeader = () => {
	const { accessToken, tokenType } = SpotifyAuth.getAuth();

	return `${tokenType} ${accessToken}`;
};
