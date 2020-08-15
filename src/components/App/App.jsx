import React from "react";
import { Switch, Route } from "react-router";

import "./App.sass";

const App = (props) => {
	return (
		<div className="app">
			<Switch>
				<Route path="/auth">{/* TODO: ADD SUBPAGE */}</Route>
				<Route path="/callback">{/* TODO: ADD SUBPAGE */}</Route>
				<Route path="/client">{/* TODO: ADD SUBPAGE */}</Route>
			</Switch>
		</div>
	);
};

export default App;
