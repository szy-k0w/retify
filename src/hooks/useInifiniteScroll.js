import { useCallback, useRef } from "react";

const useInifiniteScroll = (isLoading, hasMore, callback) => {
	const observer = useRef();

	const itemRef = useCallback(
		(node) => {
			if (isLoading) return;
			if (observer.current) observer.current.disconnect();
			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && hasMore) {
					callback();
				}
			});
			if (node) observer.current.observe(node);
		},
		[isLoading, hasMore, callback]
	);

	return [itemRef];
};

export default useInifiniteScroll;
