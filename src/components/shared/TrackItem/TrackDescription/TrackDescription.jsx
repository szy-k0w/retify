import React from "react";
import PropTypes from "prop-types";

import "./TrackDescription.sass";

const TrackDescription = ({ title, artists }) => {
	return (
		<main className="track-description">
			<h3 className="track-description__title">{title}</h3>
			<h3 className="track-description__artists-wrapper">
				{/* TODO: ADD LINK */}
				{artists.map((artist) => artist.name).join(", ")}
			</h3>
		</main>
	);
};

TrackDescription.propTypes = {
	title: PropTypes.string.isRequired,
	artists: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
		})
	).isRequired,
};

TrackDescription.defaultProps = {
	title: "No track title found.",
	artists: [],
};

export default TrackDescription;
