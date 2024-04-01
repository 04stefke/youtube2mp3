import axios from "axios";

export const getDownloadLink = async (term) => {

	const options = {
		method: "POST",
		url: "https://youtube-to-mp315.p.rapidapi.com/download",
		params: {
			url: `${term}`,
			format: "mp3",
		},
		headers: {
			"content-type": "application/json",
			"X-RapidAPI-Key": "6b5facca86msh63cc9bea7d58a4ep1cbfaejsn89bd9133e33a",
			"X-RapidAPI-Host": "youtube-to-mp315.p.rapidapi.com",
		},
		data: {},
	};

	try {
		const response = await axios.request(options);
		return response.data;
	} catch (error) {
		console.error(error);
        return null;
	}
};
