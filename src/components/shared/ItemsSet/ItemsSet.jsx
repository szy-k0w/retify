import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

import useFetch from "hooks/useFetch";

import Header from "./Header";
import Content from "./Content";
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

	const handleEnhancedFetch = async () => {
		const params = {
			offset: items.length,
		};

		return await handleFetch(params);
	};

	const [data, isLoading, error, fetchItems] = useFetch(handleEnhancedFetch);
	const [itemRef] = useInifiniteScroll(isLoading, hasMore, fetchItems);

	useEffect(() => {
		if (
			data &&
			data.hasOwnProperty("items") &&
			data.hasOwnProperty("hasMore")
		) {
			const { items, hasMore } = data;
			setItems((currentItems) => [...currentItems, ...items]);
			setHasMore(hasMore);
		}
	}, [data]);

	useEffect(fetchItems, []);

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
