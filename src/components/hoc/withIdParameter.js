import React from "react";
import { Redirect, useParams } from "react-router";

const withIdParameter = (Base) => {
	const WrappedComponent = (props) => {
		const { id } = useParams();

		if (!id) return <Redirect to="/client/not-found" />;

		return <Base {...props} id={id} />;
	};

	WrappedComponent.displayName = "withIdParameter";

	return WrappedComponent;
};

export default withIdParameter;
