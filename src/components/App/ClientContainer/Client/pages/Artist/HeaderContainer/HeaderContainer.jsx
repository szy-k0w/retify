import React, { useEffect, useState } from "react";

import ArtistAPI from "services/SpotifyAPI/ArtistAPI";
import Header from "./Header";
import PropTypes from "prop-types";
import withIdParameter from "components/hoc/withIdParameter";

const HeaderContainer = ({ id }) => {
	const [artist, setArtist] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		(async () => {
			try {
				setIsLoading(true);
				const artist = await ArtistAPI.getArtist({ id });
				setArtist(artist);
				setIsLoading(false);
			} catch (error) {
				setIsLoading(false);
			}
		})();
	}, [id]);

	return <Header isLoading={isLoading} artist={artist} />;
};

HeaderContainer.propTypes = {
	id: PropTypes.string.isRequired,
};
export default withIdParameter(HeaderContainer);
