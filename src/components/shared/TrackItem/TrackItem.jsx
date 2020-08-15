import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import useFirstImgSrc from "hooks/useFirstImgSrc";

import TrackDescription from "./TrackDescription";
import TrackDuration from "./TrackDuration";
import "./TrackItem.sass";
import Cover from "../Cover";
import TrackControlContainer from "./TrackControlContainer";

const TrackItem = ({ track, isActive }) => {
	const { id, name, artists, album, duration_ms } = track;
	const [coverSrc] = useFirstImgSrc(album.images);

	const trackItemClasses = cx({
		"track-item": true,
		"track-item--active": isActive,
		"track-item--no-cover": !coverSrc,
	});

	return (
		<div className={trackItemClasses}>
			<TrackControlContainer id={id} />
			{coverSrc && <Cover src={coverSrc} alt="Track cover" />}
			<TrackDescription title={name} artists={artists} />
			<TrackDuration duration={duration_ms} />
		</div>
	);
};

TrackItem.propTypes = {
	track: PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		artists: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.string.isRequired,
				name: PropTypes.string.isRequired,
			})
		).isRequired,
		album: PropTypes.shape({
			id: PropTypes.string.isRequired,
			images: PropTypes.arrayOf(
				PropTypes.shape({ url: PropTypes.string.isRequired })
			).isRequired,
		}),
		duration_ms: PropTypes.number.isRequired,
	}).isRequired,
	isActive: PropTypes.bool.isRequired,
};

TrackItem.defaultProps = {
	isActive: false,
};

export default TrackItem;
