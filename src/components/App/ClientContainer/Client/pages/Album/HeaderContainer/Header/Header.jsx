import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

import MediaHeader from "components/shared/MediaHeader";
import Cover from "components/shared/Cover";
import getFirstImgSrc from "helpers/getFirstImgSrc";

const Header = ({ isLoading, album }) => {
	const renderContent = () => {
		if (isLoading) return;

		console.log(album);
		const { name, type, images, release_date } = album;
		const coverUrl = getFirstImgSrc(images);

		return (
			<React.Fragment>
				<Cover src={coverUrl} />
				<MediaHeader.Type>{type}</MediaHeader.Type>
				<MediaHeader.Title>{name}</MediaHeader.Title>
				<MediaHeader.Detail>
					<FontAwesomeIcon icon={faCalendar} /> {release_date}
				</MediaHeader.Detail>
			</React.Fragment>
		);
	};

	return <MediaHeader isLoading={isLoading}>{renderContent()}</MediaHeader>;
};

Header.propTypes = {};

export default Header;
