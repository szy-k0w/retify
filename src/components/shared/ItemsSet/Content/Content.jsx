import React, { useContext } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import { ItemsSetContext } from "../ItemsSet";
import Loading from "./Loading";

const Content = ({ children, variant }) => {
	const { items, isLoading } = useContext(ItemsSetContext);

	const contentClasses = cx({
		"items-set-content": true,
		"items-set-content--list": variant === "list",
		"items-set-content--grid": variant === "grid",
	});

	return (
		<React.Fragment>
			<main className={contentClasses}>{children(items)}</main>
			{/* TODO: ADD FALLBACK AND ERROR */}
			{isLoading && <Loading />}
		</React.Fragment>
	);
};

Content.propTypes = {
	children: PropTypes.func.isRequired,
	variant: PropTypes.oneOf(["grid", "list"]).isRequired,
	fallback: PropTypes.string.isRequired,
};

Content.defaultProps = {
	children: () => {},
	variant: "grid",
	fallback: "No data",
};

export default Content;
