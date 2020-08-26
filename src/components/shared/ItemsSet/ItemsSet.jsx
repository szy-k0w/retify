import React, { createContext, useCallback, useEffect, useState } from "react";

import Content from "./Content";
import Header from "./Header";
import PropTypes from "prop-types";
import useInifiniteScroll from "hooks/useInifiniteScroll";

const initialContextValue = {
	items: [],
	isLoading: true,
	error: null,
	itemRef: () => {},
};

const ItemsSetContext = createContext(initialContextValue);

const ItemsSet = ({ children, handleFetch }) => {
	const [items, setItems] = useState([]);
	const [hasMore, setHasMore] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchParams = {
		offset: items.length,
		lastItem: items[items.length - 1],
	};

	const handleEnhancedFetch = useCallback(async () => {
		if (isLoading || error) return;

		try {
			setIsLoading(true);
			const { items, hasMore } = await handleFetch(fetchParams);
			setItems((currentItems) => [...currentItems, ...items]);
			const newHasMore = items.length !== 0 ? hasMore : false;
			setHasMore(newHasMore);
			setIsLoading(false);
		} catch (error) {
			setError(error);
			setIsLoading(false);
		}
	}, [isLoading, error, handleFetch, fetchParams]);

	const [itemRef] = useInifiniteScroll(isLoading, hasMore, handleEnhancedFetch);

	useEffect(() => {
		if (items.length === 0) handleEnhancedFetch();
	}, [items.length, handleEnhancedFetch]);

	const contextValue = {
		items,
		isLoading,
		error,
		itemRef,
	};

	return (
		<ItemsSetContext.Provider value={contextValue}>
			<section className="items-set">{children}</section>
		</ItemsSetContext.Provider>
	);
};

ItemsSet.propTypes = {
	children: PropTypes.node,
	handleFetch: PropTypes.func.isRequired,
};

ItemsSet.Header = Header;
ItemsSet.Content = Content;

export { ItemsSetContext };
export default ItemsSet;
