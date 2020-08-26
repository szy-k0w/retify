import React from "react";
import PropTypes from "prop-types";

import ItemsSet from "components/shared/ItemsSet";
import ArtistCardContainer from "components/shared/ArtistCardContainer";

const InfiniteArtistsSet = ({ title, fetchArtists }) => {
	const renderArtistsCardsGrid = (artists, itemRef) => {
		return artists.map((artist) => (
			<ArtistCardContainer
				key={artist.id}
				artist={artist}
				artistRef={itemRef}
			/>
		));
	};

	return (
		<ItemsSet handleFetch={fetchArtists}>
			<ItemsSet.Header>{title}</ItemsSet.Header>
			<ItemsSet.Content variant="grid">
				{renderArtistsCardsGrid}
			</ItemsSet.Content>
		</ItemsSet>
	);
};

InfiniteArtistsSet.propTypes = {
	title: PropTypes.string.isRequired,
	fetchArtists: PropTypes.func.isRequired,
};

InfiniteArtistsSet.defaultProps = {
	title: "Artists",
	fetchArtists: () => {},
};

export default InfiniteArtistsSet;
