import React from "react";
import { Switch, Route } from "react-router";

import AuthContainer from "./AuthContainer";
import CallbackContainer from "./CallbackContainer";
import "./App.sass";

const App = (props) => {
	return (
		<div className="app">
			<Switch>
				<Route path="/auth" component={AuthContainer} />
				<Route path="/callback" component={CallbackContainer} />
				<Route path="/client">{/* TODO: ADD SUBPAGE */}</Route>
			</Switch>
		</div>
	);
};

export default App;
