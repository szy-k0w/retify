import ItemsSet from "components/shared/ItemsSet";
import PropTypes from "prop-types";
import React from "react";
import TrackItem from "components/shared/TrackItem";

const Tracks = ({ fetchTracks }) => {
	return (
		<ItemsSet handleFetch={fetchTracks}>
			<ItemsSet.Content variant="list">
				{(items, itemRef) =>
					items.map((track) => {
						return <TrackItem key={track.id} track={track} ref={itemRef} />;
					})
				}
			</ItemsSet.Content>
		</ItemsSet>
	);
};

Tracks.propTypes = {
	fetchTracks: PropTypes.func.isRequired,
};

Tracks.defaultProps = {
	fetchTrack: () => {},
};

export default Tracks;
