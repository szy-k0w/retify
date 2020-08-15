import React, { useContext } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import { ItemsSetContext } from "../ItemsSet";
import SetStatus from "./SetStatus";

const Content = ({ children, variant }) => {
	const { items, isLoading, error, itemRef } = useContext(ItemsSetContext);

	if (error) {
		console.log(error.response);
	}

	for (let key in error) {
		console.log(key);
	}

	const contentClasses = cx({
		"items-set-content": true,
		"items-set-content--list": variant === "list",
		"items-set-content--grid": variant === "grid",
	});

	return (
		<React.Fragment>
			<main className={contentClasses}>{children(items, itemRef)}</main>
			<SetStatus error={error} isLoading={isLoading} />
		</React.Fragment>
	);
};

Content.propTypes = {
	children: PropTypes.func.isRequired,
	variant: PropTypes.oneOf(["grid", "list"]).isRequired,
};

Content.defaultProps = {
	children: () => {},
	variant: "grid",
};

export default Content;
