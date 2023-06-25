import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: process.env.REACT_APP_BACKEND_URL,
	params: {
		language: "ko-KR",
		api_key: process.env.REACT_APP_TMDB_TOKEN,
	},
});
