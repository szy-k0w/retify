import InfiniteArtistsSet from "components/shared/InfiniteArtistsSet/InfiniteArtistsSet";
import ItemsSet from "components/shared/ItemsSet";
import PropTypes from "prop-types";
import React from "react";
import SubpageContent from "components/shared/SubpageContent";
import TrackItem from "components/shared/TrackItem";

const Home = ({ fetchRecentlyPlayed, fetchTopArtists }) => {
	const renderTracksList = (tracks) => {
		return tracks.map((track) => <TrackItem key={track.id} track={track} />);
	};

	return (
		<SubpageContent>
			<ItemsSet handleFetch={fetchRecentlyPlayed}>
				<ItemsSet.Header>Recently Played</ItemsSet.Header>
				<ItemsSet.Content variant="list">{renderTracksList}</ItemsSet.Content>
			</ItemsSet>
			<InfiniteArtistsSet title="Top Artists" fetchArtists={fetchTopArtists} />
		</SubpageContent>
	);
};

Home.propTypes = {
	fetchRecentlyPlayed: PropTypes.func.isRequired,
};

export default Home;
