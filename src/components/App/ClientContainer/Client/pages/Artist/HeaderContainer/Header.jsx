import Cover from "components/shared/Cover";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MediaHeader from "components/shared/MediaHeader";
import React from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import getFirstImgSrc from "helpers/getFirstImgSrc";

const Header = ({ isLoading, artist }) => {
	const renderContent = () => {
		if (isLoading) return;

		const { name, type, images, followers } = artist;
		const coverUrl = getFirstImgSrc(images);

		return (
			<React.Fragment>
				<Cover src={coverUrl} />
				<MediaHeader.Type>{type}</MediaHeader.Type>
				<MediaHeader.Title>{name}</MediaHeader.Title>
				<MediaHeader.Detail>
					<FontAwesomeIcon icon={faHeart} /> {followers.total}
				</MediaHeader.Detail>
			</React.Fragment>
		);
	};

	return <MediaHeader isLoading={isLoading}>{renderContent()}</MediaHeader>;
};

Header.propTypes = {};

export default Header;
