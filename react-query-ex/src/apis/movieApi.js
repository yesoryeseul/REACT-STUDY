import { axiosInstance } from "./@core";

const MovieApi = {
	// getPopularMovie(language) {
	// 	return axiosInstance.get(`/movie/popular`, {
	// 		params: { language, api_key: process.env.REACT_APP_TMDB_TOKEN },
	// 	});
	// }, // MovieApi.getPopular("ko_KR")

	getPopularMovie(params) {
		return axiosInstance.get(`/movie/popular`, { params });
	}, // MovieApi.getPopular({ language: "ko-KR"., api_key: process.env.REACT_APP_TMDB_TOKEN });

	getNowPlayingMovie(language) {
		return axiosInstance.get(`/movie/now_playing`, {
			params: { language },
		});
	},

	getUpComingMovie(language) {
		return axiosInstance.get(`/movie/upcoming`, {
			params: { language },
		});
	},

	getTopRatedMovie(language) {
		return axiosInstance.get(`/movie/top_rated`, {
			params: { language },
		});
	},

	getUpComingMovie(language) {
		return axiosInstance.get(`/movie/${movie_id}`, {
			params: { language },
		});
	},

	getSearchMovie(language) {
		return axiosInstance.get(`/search/movie`, {
			params: { language },
		});
	},
};

export default MovieApi;
