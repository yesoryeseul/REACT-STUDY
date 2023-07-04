import { axiosInstance } from "./@core";

const MovieApi = {
	// getPopularMovie(language) {
	// 	return axiosInstance.get(`/movie/popular`, {
	// 		params: { language, api_key: process.env.REACT_APP_TMDB_TOKEN },
	// 	});
	// }, // MovieApi.getPopular("ko_KR")

	/* 엔드포인트만 다른 로직 -> 더 재사용성있게 만들 순 없을까?
		매개변수로 전달하기!!
	*/
	// 기본 로직
	// getMoviesList(endpoint, params) {
	// 	return axiosInstance.get(`/movie/${endpoint}`, { params });
	// }, // MovieApi.getPopular(endpoint);

	// 언어 바꾸기 요청
	getMoviesList(endpoint, params, language) {
		return axiosInstance.get(`/movie/${endpoint}`, {
			params: { ...params, language },
		});
	},
	// getMoviesList(endpoint, params) {
	// 	return axiosInstance.get(`/movie/${endpoint}`, {
	// 		params: params,
	// 	});
	// },

	// ----------------상세 페이지, 검색 페이지----------

	getDetailMovie(movie_id, params) {
		return axiosInstance.get(`/movie/${movie_id}`, { params });
	},

	getSearchMovie(params) {
		return axiosInstance.get(`/search/movie`, { params });
	},
};

export default MovieApi;
