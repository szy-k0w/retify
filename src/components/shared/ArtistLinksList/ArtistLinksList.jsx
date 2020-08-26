import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const ArtistLinksList = ({ artists }) => {
	return (
		<React.Fragment>
			{artists.map(({ id, name }, index, artists) => (
				<NavLink
					key={id}
					style={{ color: "inherit", textDecoration: "inherit" }}
					to={`/client/artist/${id}`}
				>{`${name}${index !== artists.length - 1 ? ", " : ""}`}</NavLink>
			))}
		</React.Fragment>
	);
};

ArtistLinksList.propTypes = {
	artists: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
		})
	).isRequired,
};

ArtistLinksList.defaultProps = {
	artists: [],
};

export default ArtistLinksList;
