const getFirstImgSrc = (images = []) => {
	const src = images[0] ? images[0].url : null;

	return src;
};

export default getFirstImgSrc;
