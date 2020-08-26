import "./ClientHeader.sass";

import { Route, withRouter } from "react-router";

import Navigation from "components/shared/Navigation";
import React from "react";
import SpotifyAuth from "services/SpotifyAuth";

const ClientHeader = ({ history }) => {
	const handleLogOut = () => {
		SpotifyAuth.logOut();
		history.push("/auth");
	};

	return (
		<header className="client-header">
			<Route path="/client/library">
				<Navigation direction="row">
					<Navigation.Link to="/client/library/artists">
						Artists
					</Navigation.Link>
					<Navigation.Link to="/client/library/albums">Albums</Navigation.Link>
				</Navigation>
			</Route>
			<div className="log-out-wrapper">
				<button className="log-out-wrapper__btn" onClick={handleLogOut}>
					Log Out
				</button>
			</div>
		</header>
	);
};

export default withRouter(ClientHeader);
