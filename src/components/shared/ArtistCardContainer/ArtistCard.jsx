import Cover from "../Cover/Cover";
import MediaCard from "../MediaCard/MediaCard";
import React from "react";
import getFirstImgSrc from "helpers/getFirstImgSrc";

const ArtistCard = ({
	artist,
	artistRef,
	handleAction,
	isActive,
	isPlaying,
}) => {
	const { id, name, type, images } = artist;
	const coverUrl = getFirstImgSrc(images);

	return (
		<MediaCard ref={artistRef}>
			<MediaCard.Header isPlaying={isPlaying} handleAction={handleAction}>
				<Cover src={coverUrl} alt="Artist's Photo" />
			</MediaCard.Header>
			<MediaCard.Content>
				<MediaCard.Title to={`/client/artist/${id}`} isActive={isActive}>
					{name}
				</MediaCard.Title>
				<MediaCard.Type>{type}</MediaCard.Type>
			</MediaCard.Content>
		</MediaCard>
	);
};

ArtistCard.propTypes = {};

export default ArtistCard;
