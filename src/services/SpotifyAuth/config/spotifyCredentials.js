const spotifyCredentials = {
	client_id: "1bb9eb7f824b458bbb58657dbc1877ba",
	redirect_url: "http://localhost:3000/callback",
	response_type: "token",
	scope: [
		"user-read-playback-state",
		"user-modify-playback-state",
		"streaming",
	].join(","),
};

export default spotifyCredentials;

// Images
// ugc-image-upload
// Spotify Connect
// user-read-playback-state
// user-modify-playback-state
// user-read-currently-playing
// Playback
// streaming
// app-remote-control
// Users
// user-read-email
// user-read-private
// Playlists
// playlist-read-collaborative
// playlist-modify-public
// playlist-read-private
// playlist-modify-private
// Library
// user-library-modify
// user-library-read
// Listening History
// user-top-read
// user-read-playback-position
// user-read-recently-played
// Follow
// user-follow-read
// user-follow-modify
