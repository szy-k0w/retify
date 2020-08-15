import React from "react";
import { Switch } from "react-router";

import ClientSidebar from "./ClientSidebar";
import "./Client.sass";

const Client = () => {
	return (
		<div className="client">
			<header>{/* TODO: ADD HEADER COMPONENT */}</header>
			<ClientSidebar />
			<main className="client__content">
				<Switch>{/* TODO: ADD PAGES */}</Switch>
			</main>
			<footer>{/* TODO: ADD PLAYER COMPONENT */}</footer>
		</div>
	);
};

export default Client;
