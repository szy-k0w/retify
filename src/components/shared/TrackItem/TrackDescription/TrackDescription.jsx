import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./TrackDescription.sass";
import ArtistLinksList from "components/shared/ArtistLinksList/ArtistLinksList";

const TrackDescription = ({ title, artists, isActive }) => {
	const trackItemClasses = cx({
		"track-description": true,
		"track-description--active": isActive,
	});

	return (
		<main className={trackItemClasses}>
			<h3 className="track-description__title">{title}</h3>
			<h3 className="track-description__artists">
				{/* TODO: ADD LINK */}
				<ArtistLinksList artists={artists} />
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
	isActive: PropTypes.bool,
};

TrackDescription.defaultProps = {
	title: "No track title found.",
	artists: [],
};

export default TrackDescription;
