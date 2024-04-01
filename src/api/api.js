import axios from "axios";

export const getDownloadLink = async (term) => {
	const options = {
		method: "GET",
		url: "https://youtube-mp3-downloader2.p.rapidapi.com/ytmp3/ytmp3/",
		params: {
			url: `${term}`,
		},
		headers: {
			"X-RapidAPI-Key": "6b5facca86msh63cc9bea7d58a4ep1cbfaejsn89bd9133e33a",
			"X-RapidAPI-Host": "youtube-mp3-downloader2.p.rapidapi.com",
		},
	};

	try {
		const response = await axios.request(options);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};
