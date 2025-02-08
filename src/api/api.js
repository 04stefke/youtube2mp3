import axios from "axios";
const url = import.meta.env.VITE_RAPIDAPI_URL;
const key = import.meta.env.VITE_RAPIDAPI_KEY;
const host = import.meta.env.VITE_RAPIDAPI_HOST;

export const getDownloadLink = async (term) => {
	const options = {
		method: "GET",
		url: url,
		params: {
			url: term,
		},
		headers: {
			"X-RapidAPI-Key": key,
			"X-RapidAPI-Host": host,
		},
	};

	try {
		const response = await axios.request(options);
		return response.request.responseURL;
	} catch (error) {
		console.error(error);
		return {}
	}
};
