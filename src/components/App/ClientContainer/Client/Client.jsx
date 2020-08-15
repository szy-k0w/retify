import React from "react";
import { Switch, Route } from "react-router";

import ClientSidebar from "./ClientSidebar";
import HomeContainer from "./pages/HomeContainer";
import "./Client.sass";

const Client = () => {
	return (
		<div className="client">
			<header>{/* TODO: ADD HEADER COMPONENT */}</header>
			<ClientSidebar />
			<main className="client__content">
				<Switch>
					<Route path="/client/home" component={HomeContainer} />
					{/* TODO: ADD PAGES */}
				</Switch>
			</main>
			<footer>{/* TODO: ADD PLAYER COMPONENT */}</footer>
		</div>
	);
};

export default Client;
