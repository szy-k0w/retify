import React from "react";
import PropTypes from "prop-types";

import "./TrackInfo.sass";
import getFirstImgSrc from "helpers/getFirstImgSrc";

const TrackInfo = ({ currentTrack }) => {
	const { album, artists, name } = currentTrack;
	const coverSrc = getFirstImgSrc(album.images);

	return (
		<aside className="track-info">
			<img
				className="track-info__cover"
				src={coverSrc}
				alt="Current track cover"
			/>
			<main className="track-details">
				<h5 className="track-details__name">{name}</h5>
				<footer className="track-details__artists">
					{artists.map((artist) => artist.name).join(", ")}
				</footer>
			</main>
		</aside>
	);
};

TrackInfo.propTypes = {
	currentTrack: PropTypes.shape({
		album: PropTypes.shape({
			images: PropTypes.arrayOf(
				PropTypes.shape({ url: PropTypes.string.isRequired })
			).isRequired,
		}).isRequired,
		artists: PropTypes.arrayOf(
			PropTypes.shape({
				name: PropTypes.string.isRequired,
			})
		).isRequired,
		name: PropTypes.string.isRequired,
	}).isRequired,
};

export default TrackInfo;
