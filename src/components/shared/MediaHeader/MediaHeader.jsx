import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import LoadingSpinner from "../LoadingSpinner";

import Type from "./Type";
import Title from "./Title";
import Detail from "./Detail";
import "./MediaHeader.sass";

const MediaHeader = ({ children, isLoading }) => {
	const mediaHeaderClasses = cx({
		"media-header": true,
		"media-header--loading": isLoading,
	});

	const renderContent = () => {
		if (isLoading) return <LoadingSpinner />;

		return children;
	};

	return <header className={mediaHeaderClasses}>{renderContent()}</header>;
};

MediaHeader.propTypes = {
	children: PropTypes.node,
	isLoading: PropTypes.bool,
};

MediaHeader.Type = Type;
MediaHeader.Title = Title;
MediaHeader.Detail = Detail;

export default MediaHeader;
