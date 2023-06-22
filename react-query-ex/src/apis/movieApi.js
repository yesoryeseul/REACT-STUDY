import { axiosInstance } from "./@core";

const MovieApi = {
	// getPopularMovie(language) {
	// 	return axiosInstance.get(`/movie/popular`, {
	// 		params: { language, api_key: process.env.REACT_APP_TMDB_TOKEN },
	// 	});
	// }, // MovieApi.getPopular("ko_KR")

	// 받아야 할 params 값 language, api_key
	getPopularMovie(params) {
		return axiosInstance.get(`/movie/popular`, { params });
	}, // MovieApi.getPopular({ language: "ko-KR", api_key: process.env.REACT_APP_TMDB_TOKEN });

	getNowPlayingMovie(params) {
		return axiosInstance.get(`/movie/now_playing`, { params });
	},

	getUpComingMovie(params) {
		return axiosInstance.get(`/movie/upcoming`, { params });
	},

	getTopRatedMovie(params) {
		return axiosInstance.get(`/movie/top_rated`, { params });
	},

	getUpComingMovie(movie_id, params) {
		return axiosInstance.get(`/movie/${movie_id}`, { params });
	},

	getSearchMovie(params) {
		return axiosInstance.get(`/search/movie`, { params });
	},
};

export default MovieApi;
