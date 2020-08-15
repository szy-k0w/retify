import { useState, useCallback } from "react";

const useFetch = (callback) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	const handleFetch = useCallback(() => {
		setIsLoading(true);
		setError(null);
		callback()
			.then(setData)
			.catch((error) => {
				console.error(error.message);
				setError(error);
			});
		setIsLoading(false);
	}, [callback]);

	return [data, isLoading, error, handleFetch];
};

export default useFetch;
