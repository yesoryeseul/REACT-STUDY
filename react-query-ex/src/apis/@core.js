import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: process.env.REACT_APP_BACKEND_URL,
	headers: {
		Authorization: `Bearer ` + process.env.REACT_APP_TMDB_TOKEN,
	},
});
