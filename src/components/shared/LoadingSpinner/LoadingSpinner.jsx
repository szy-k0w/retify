import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import "./LoadingSpinner.sass";

const LoadingSpinner = () => {
	return <FontAwesomeIcon className="loading-spinner" icon={faSpinner} spin />;
};

export default LoadingSpinner;
