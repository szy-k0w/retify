import "./TrackItem.sass";

import Cover from "../Cover";
import PlayerAPI from "services/SpotifyAPI/PlayerAPI";
import PropTypes from "prop-types";
import React from "react";
import TrackControl from "./TrackControl";
import TrackDescription from "./TrackDescription";
import TrackDuration from "./TrackDuration";
import cx from "classnames";
import getFirstImgSrc from "helpers/getFirstImgSrc";
import withWebPlayback from "components/providers/WebPlaybackContext/withWebPlayback";

const TrackItem = React.forwardRef(({ track, webPlaybackValue }, ref) => {
	const { id, name, artists, album, duration_ms, uri } = track;
	const { isPlaying, currentTrack } = webPlaybackValue;

	const coverSrc = getFirstImgSrc(album && album.images);

	const currentTrackId = currentTrack ? currentTrack.id : null;
	const isActive = currentTrackId === id;

	const handleTrackAction = async ({ id, uri }) => {
		if (isActive && isPlaying) {
			await PlayerAPI.putPause();
		} else {
			await PlayerAPI.putPlayByUri({ uri });
		}
	};

	const trackItemClasses = cx({
		"track-item": true,
		"track-item--no-cover": !coverSrc,
	});

	return (
		<div className={trackItemClasses} ref={ref}>
			<TrackControl
				id={id}
				uri={uri}
				handleAction={handleTrackAction}
				isPlaying={isPlaying}
				isActive={isActive}
			/>
			{coverSrc && <Cover src={coverSrc} alt="Track cover" />}
			<TrackDescription title={name} artists={artists} isActive={isActive} />
			<TrackDuration duration={duration_ms} />
		</div>
	);
});

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
	webPlaybackValue: PropTypes.shape({}).isRequired,
};

TrackItem.defaultProps = {
	isActive: false,
};

export default withWebPlayback(TrackItem);
