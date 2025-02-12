import axios from "axios";
const url = import.meta.env.VITE_RAPIDAPI_URL;
const key = import.meta.env.VITE_RAPIDAPI_KEY;
const host = import.meta.env.VITE_RAPIDAPI_HOST;

export const getDownloadLink = async (term) => {
	const videoID = getYouTubeVideoID(term); // Extract the ID
	if (!videoID) {
		console.error("Invalid YouTube URL");
		return { error: "Invalid YouTube URL" };
	}
	const options = {
		method: "GET",
		url: url,
		params: {
			id: videoID,
		},
		headers: {
			"X-RapidAPI-Key": key,
			"X-RapidAPI-Host": host,
		},
	};

	try {
		const response = await axios.request(options);
		return response.data;
	} catch (error) {
		console.error(error);
		return {};
	}
};

const getYouTubeVideoID = (url) => {
	const regex =
		/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
	const match = url.match(regex);
	return match ? match[1] : null;
};
