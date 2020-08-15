import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router";

import SubpageContent from "components/shared/SubpageContent";
import ItemsSet from "components/shared/ItemsSet";

const Library = ({ fetchArtists, fetchAlbums }) => {
	return (
		<SubpageContent>
			<Switch>
				<Route path="/client/library/artists">Artists</Route>
				<Route path="/client/library/albums">
					<ItemsSet></ItemsSet>
				</Route>
			</Switch>
		</SubpageContent>
	);
};

Library.propTypes = {
	fetchAlbums: PropTypes.func.isRequired,
	fetchAlbums: PropTypes.func.isRequired,
};

export default Library;
