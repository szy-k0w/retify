import React from "react";
import PropTypes from "prop-types";

import ItemsSet from "components/shared/ItemsSet";
import AlbumCardContainer from "../AlbumCardContainer";

const InfiniteAlbumsSet = ({ title, fetchAlbums }) => {
	const renderAlbumCardsGrid = (albums, itemRef) => {
		return albums.map((album) => (
			<AlbumCardContainer key={album.id} album={album} albumRef={itemRef} />
		));
	};

	return (
		<ItemsSet handleFetch={fetchAlbums}>
			<ItemsSet.Header>{title}</ItemsSet.Header>
			<ItemsSet.Content variant="grid">{renderAlbumCardsGrid}</ItemsSet.Content>
		</ItemsSet>
	);
};

InfiniteAlbumsSet.propTypes = {
	title: PropTypes.string.isRequired,
	fetchAlbums: PropTypes.func.isRequired,
};

InfiniteAlbumsSet.defaultProps = {
	title: "Albums",
	fetchAlbums: () => {},
};

export default InfiniteAlbumsSet;
