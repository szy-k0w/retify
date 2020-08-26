import { useState, useCallback } from "react";

const useFetch = (callback) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const handleFetch = useCallback(() => {
		if (isLoading) return;

		setIsLoading(true);
		setError(null);
		callback()
			.then(setData)
			.catch((error) => {
				console.error(error.message);
				setError(error);
			});
		setIsLoading(false);
	}, [callback, isLoading]);

	return [data, isLoading, error, handleFetch];
};

export default useFetch;
