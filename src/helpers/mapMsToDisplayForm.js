const mapMsToDisplayForm = (duration_ms) => {
	const date = new Date(duration_ms);

	const minutes = date.getUTCMinutes();

	const seconds =
		date.getUTCSeconds() < 10
			? `0${date.getUTCSeconds()}`
			: date.getUTCSeconds();

	return `${minutes}:${seconds}`;
};

export default mapMsToDisplayForm;
