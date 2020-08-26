import { Redirect, Route, Switch } from "react-router";

import HeaderContainer from "./HeaderContainer";
import Navigation from "components/shared/Navigation";
import React from "react";
import RelatedArtists from "./HeaderContainer/RelatedArtists";
import Review from "./Review";
import SubpageContent from "components/shared/SubpageContent";
import withIdParameter from "components/hoc/withIdParameter";

const Artist = ({ id }) => {
	return (
		<React.Fragment>
			<HeaderContainer />
			<SubpageContent>
				<Navigation direction="row">
					<Navigation.Link to={`/client/artist/${id}/review`}>
						Review
					</Navigation.Link>
					<Navigation.Link to={`/client/artist/${id}/related-artists`}>
						Related Artists
					</Navigation.Link>
				</Navigation>
				<Switch key={id}>
					<Route path={`/client/artist/${id}/review`}>
						<Review id={id} />
					</Route>
					<Route path={`/client/artist/${id}/related-artists`}>
						<RelatedArtists id={id} />
					</Route>
					<Route>
						<Redirect to={`/client/artist/${id}/review`} />
					</Route>
				</Switch>
			</SubpageContent>
		</React.Fragment>
	);
};

export default withIdParameter(Artist);
