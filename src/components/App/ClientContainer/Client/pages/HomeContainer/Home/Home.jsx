import React from "react";
import PropTypes from "prop-types";

import ItemsSet from "components/shared/ItemsSet";
import SubpageContent from "components/shared/SubpageContent";
import TrackItem from "components/shared/TrackItem";

const Home = (props) => {
	const { fetchRecentlyPlayed } = props;

	const renderTracksList = (tracks) => {
		return tracks.map((track) => <TrackItem key={track.id} track={track} />);
	};

	return (
		<SubpageContent>
			<ItemsSet handleFetch={fetchRecentlyPlayed}>
				<ItemsSet.Header moreUrl="/">Recently Played</ItemsSet.Header>
				<ItemsSet.Content variant="list">{renderTracksList}</ItemsSet.Content>
			</ItemsSet>
		</SubpageContent>
	);
};

Home.propTypes = {
	fetchRecentlyPlayed: PropTypes.func.isRequired,
};

export default Home;
