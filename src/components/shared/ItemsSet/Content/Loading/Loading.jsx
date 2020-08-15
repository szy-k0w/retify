import React from "react";

import LoadingSpinner from "components/shared/LoadingSpinner";

import "./Loading.sass";

const Loading = (props) => {
	return (
		<footer className="set-loading">
			<LoadingSpinner />
		</footer>
	);
};

export default Loading;
