import React from "react";

import withAuthValidation from "components/hoc/withAuthValidation";
import WebPlaybackProvider from "components/providers/WebPlaybackContext/WebPlaybackProvider";

import Client from "./Client";

const ClientContainer = (props) => {
	return (
		<WebPlaybackProvider>
			<Client />
		</WebPlaybackProvider>
	);
};

ClientContainer.propTypes = {};

export default withAuthValidation(ClientContainer);
