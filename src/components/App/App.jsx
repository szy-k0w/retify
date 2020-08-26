import "./App.sass";

import { Redirect, Route, Switch } from "react-router";

import AuthContainer from "./AuthContainer";
import CallbackContainer from "./CallbackContainer";
import ClientContainer from "./ClientContainer";
import React from "react";

const App = (props) => {
	return (
		<div className="app">
			<Switch>
				<Route path="/auth" component={AuthContainer} />
				<Route path="/callback" component={CallbackContainer} />
				<Route path="/client" component={ClientContainer} />
				<Route>
					<Redirect to="/client" />
				</Route>
			</Switch>
		</div>
	);
};

export default App;
