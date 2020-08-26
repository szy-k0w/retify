import React from "react";
import PropTypes from "prop-types";

import Header from "./Header";
import Content from "./Content";
import Title from "./Title";
import Type from "./Type";
import Description from "./Description";
import "./MediaCard.sass";

const MediaCard = React.forwardRef(({ children }, ref) => {
	return (
		<article className="media-card" ref={ref}>
			{children}
		</article>
	);
});

MediaCard.propTypes = {
	children: PropTypes.node,
	isActive: PropTypes.bool.isRequired,
	handleAction: PropTypes.func.isRequired,
	coverUrl: PropTypes.string,
	title: PropTypes.string.isRequired,
	titleUrl: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	description: PropTypes.string,
};

MediaCard.defaultProps = {
	isActive: false,
	handleAction: () => {},
	title: "Media Card",
	titleUrl: "",
	type: "No Type",
};

MediaCard.Header = Header;
MediaCard.Content = Content;
MediaCard.Title = Title;
MediaCard.Type = Type;
MediaCard.Description = Description;

export default MediaCard;
