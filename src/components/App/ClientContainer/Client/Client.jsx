import "./Client.sass";

import { Redirect, Route, Switch } from "react-router";

import Album from "./pages/Album";
import Artist from "./pages/Artist";
import ClientHeader from "./ClientHeader";
import ClientSidebar from "./ClientSidebar";
import HomeContainer from "./pages/HomeContainer";
import LibraryContainer from "./pages/LibraryContainer";
import PlayerContainer from "./PlayerContainer";
import React from "react";

const Client = () => {
	return (
		<div className="client">
			<ClientHeader />
			<ClientSidebar />
			<main className="client__content">
				<Switch>
					<Route path="/client/home" component={HomeContainer} />
					<Route path="/client/library" component={LibraryContainer} />
					<Route path="/client/album/:id" component={Album} />
					<Route path="/client/artist/:id" component={Artist} />
					<Route>
						<Redirect to="/client/home" />
					</Route>
				</Switch>
			</main>
			<PlayerContainer />
		</div>
	);
};

export default Client;
