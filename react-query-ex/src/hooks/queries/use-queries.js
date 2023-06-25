// import { useQuery } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import MovieApi from "apis/movieApi";
import { QUERYKEYS } from "consts/query-key";

// const useGetMovies = () => {
// 	const { data, isLoading, isSuccess } = useQuery(
// 		[QUERYKEYS.MOVIE_POPULAR],
// 		() => MovieApi.getPopularMovie(),
// 	);
// 	return { data, isLoading, isSuccess };
// };

// export default useGetMovies;

export const useGetMovies = {
	// endpoint를 매개변수로 받아 다시 넘겨주어, 사용 시 useGetMovies.cachePopularMovie("popular");
	// 그런데 여기서 같은 로직에 엔드포인트만 다르다면 쿼리 키가 전부 다를 필요가 있는가? "get/list"의 하나의 로직으로 작성해보기! 어차피 엔드포인트만 다르게 요청하면 됨!!
	cachePopularMovie: endpoint => {
		return useQuery([QUERYKEYS.MOVIE_POPULAR], () =>
			MovieApi.getPopularMovie(endpoint),
		);
	},
	// 하나의 로직으로 엔드포인트만 다르게 사용할 수 있다!
	ListMovies: (endpoint, params, language) => {
		return useQuery([QUERYKEYS.MOVIE_LIST], () =>
			MovieApi.getMoviesList(endpoint, params, language),
		);
	},
	// cacheNowPlayingMovie: () => {
	// 	return useQuery([QUERYKEYS.MOVIE_NOWPLAYING], () =>
	// 		MovieApi.getNowPlayingMovie(),
	// 	);
	// },
	// cacheTopRatedMovie: () => {
	// 	return useQuery([QUERYKEYS.MOVIE_TOPRATED], () =>
	// 		MovieApi.getTopRatedMovie(),
	// 	);
	// },
	// cacheUpComingMovie: () => {
	// 	return useQuery([QUERYKEYS.MOVIE_UPCOMING], () =>
	// 		MovieApi.getUpComingMovie(),
	// 	);
	// },
};
