import { Redirect, Route, Switch } from "react-router";

import InfiniteAlbumsSet from "components/shared/InfiniteAlbumsSet";
import InfiniteArtistsSet from "components/shared/InfiniteArtistsSet";
import PropTypes from "prop-types";
import React from "react";
import SubpageContent from "components/shared/SubpageContent";

const Library = ({ fetchFollowedArtists, fetchSavedAlbums }) => {
	return (
		<SubpageContent>
			<Switch>
				<Route path="/client/library/artists">
					<InfiniteArtistsSet fetchArtists={fetchFollowedArtists} />
				</Route>
				<Route path="/client/library/albums">
					<InfiniteAlbumsSet fetchAlbums={fetchSavedAlbums} />
				</Route>
				<Route>
					<Redirect to="/client/library/artists" />
				</Route>
			</Switch>
		</SubpageContent>
	);
};

Library.propTypes = {
	fetchFollowedArtists: PropTypes.func.isRequired,
	fetchSavedAlbums: PropTypes.func.isRequired,
};

export default Library;
