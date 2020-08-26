import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import withIdParameter from "components/hoc/withIdParameter";

import Header from "./Header";
import AlbumAPI from "services/SpotifyAPI/AlbumAPI";

const HeaderContainer = ({ id }) => {
	const [album, setAlbum] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (album) return;

		(async () => {
			try {
				setIsLoading(true);
				const album = await AlbumAPI.getAlbum({ id });

				console.log(album);
				setAlbum(album);
				setIsLoading(false);
			} catch (error) {
				setIsLoading(false);
			}
		})();
	}, [id, album, isLoading]);

	return <Header isLoading={isLoading} album={album} />;
};

HeaderContainer.propTypes = {
	id: PropTypes.string.isRequired,
};

export default withIdParameter(HeaderContainer);
