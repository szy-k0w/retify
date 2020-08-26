import React, { useContext } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import { ItemsSetContext } from "../ItemsSet";
import SetStatus from "./SetStatus";
import "./Content.sass";

const Content = ({ children, variant }) => {
	const { items, isLoading, error, itemRef } = useContext(ItemsSetContext);

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
