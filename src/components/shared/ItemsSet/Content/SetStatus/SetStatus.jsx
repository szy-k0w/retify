import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import LoadingSpinner from "components/shared/LoadingSpinner";

import ErrorCard from "./ErrorCard";
import "./SetStatus.sass";

const SetStatus = ({ isLoading, error }) => {
	const setStatusClasses = cx({
		"set-status": true,
		"set-status--loading": isLoading,
		"set-status--hide": !isLoading && !error,
	});

	const renderContent = () => {
		if (isLoading) return <LoadingSpinner />;

		if (error) {
			if (error.isAxiosError) {
				const { message, status } = error.response.data.error;
				return <ErrorCard message={message} status={status} />;
			}
			return <ErrorCard message={error.message} />;
		}
	};

	return <footer className={setStatusClasses}>{renderContent()}</footer>;
};

SetStatus.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	error: PropTypes.shape({
		isAxiosError: PropTypes.bool,
		response: PropTypes.shape({
			data: PropTypes.shape({
				error: PropTypes.shape({
					message: PropTypes.string,
					status: PropTypes.number,
				}),
			}),
		}),
		message: PropTypes.string.isRequired,
	}),
};

export default SetStatus;
