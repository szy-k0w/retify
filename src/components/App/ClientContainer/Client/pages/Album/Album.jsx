import React from "react";

import SubpageContent from "components/shared/SubpageContent";

import TracksContainer from "./TracksContainer";
import HeaderContainer from "./HeaderContainer";

const Album = () => {
	return (
		<React.Fragment>
			<HeaderContainer />
			<SubpageContent>
				<TracksContainer />
			</SubpageContent>
		</React.Fragment>
	);
};

export default Album;
