import React from "react";
import PropTypes from "prop-types";

import "./Cover.sass";

const Cover = ({ src, alt }) => {
	return (
		<div className="cover">
			<main className="cover__content">
				<img className="cover__img" src={src} alt={alt} />
			</main>
		</div>
	);
};

Cover.propTypes = {
	src: PropTypes.string,
	alt: PropTypes.string.isRequired,
};

Cover.defaultProps = {
	alt: "Cover",
};

export default Cover;
