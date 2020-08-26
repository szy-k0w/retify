import React from "react";
import PropTypes from "prop-types";

import getFirstImgSrc from "helpers/getFirstImgSrc";
import MediaCard from "components/shared/MediaCard";
import ArtistLinksList from "components/shared/ArtistLinksList";
import Cover from "components/shared/Cover";

const AlbumCard = ({ album, albumRef, handleAction, isActive, isPlaying }) => {
	const { id, name, type, images, artists } = album;
	const coverUrl = getFirstImgSrc(images);

	return (
		<MediaCard ref={albumRef}>
			<MediaCard.Header isPlaying={isPlaying} handleAction={handleAction}>
				<Cover src={coverUrl} alt="Albums's Cover" />
			</MediaCard.Header>
			<MediaCard.Content>
				<MediaCard.Title to={`/client/album/${id}`} isActive={isActive}>
					{name}
				</MediaCard.Title>
				<MediaCard.Type>{type}</MediaCard.Type>
				<MediaCard.Description>
					<ArtistLinksList artists={artists} />
				</MediaCard.Description>
			</MediaCard.Content>
		</MediaCard>
	);
};

AlbumCard.propTypes = {
	album: PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		images: PropTypes.arrayOf(
			PropTypes.shape({
				url: PropTypes.string.isRequired,
			})
		).isRequired,
		artists: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.string.isRequired,
				name: PropTypes.string.isRequired,
			})
		).isRequired,
	}).isRequired,
	albumRef: PropTypes.func.isRequired,
	handleAction: PropTypes.func.isRequired,
	isActive: PropTypes.bool.isRequired,
};

export default AlbumCard;
