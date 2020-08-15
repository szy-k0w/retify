import React from "react";

import withAuthValidation from "components/hoc/withAuthValidation";

import Client from "./Client";

const ClientContainer = (props) => {
	// TODO: ADD WebPlaybackProvider
	return <Client />;
};

ClientContainer.propTypes = {};

export default withAuthValidation(ClientContainer);
