import React from "react";

import Navigation from "components/shared/Navigation";

import "./ClientSidebar.sass";

const ClientSidebar = () => {
	return (
		<aside className="client-sidebar">
			<Navigation direction="column">
				<Navigation.Link to="/client/home">Home</Navigation.Link>
				<Navigation.Link to="/client/library">Library</Navigation.Link>
			</Navigation>
		</aside>
	);
};

export default ClientSidebar;
