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
	// 쿼리키에 language를 넣어 언어 변경 기능 해결
	ListMovies: (endpoint, params, language) => {
		return useQuery([QUERYKEYS.MOVIE_LIST, language], () =>
			MovieApi.getMoviesList(endpoint, params, language),
		);
	},
};

/**
 * 쿼리키에 language를 넣어 React Query 라이브러리의 캐시 기능을 활용!
 * React Query는 데이터를 캐싱하여 중복된 요청을 최소화하고 성능을 향상시키는 기능을 제공
 * 첫 번째 인자인 쿼리키 [QUERYKEYS.MOVIE_LIST, language] 는 영화 목록 요청의 캐시를 구분하기 위한 고유한 식별자로 사용
 * language 넣어주어 변수의 값이 변경될 때마다 해당 쿼리키가 변경되므로 데이터를 다시 불러오는 것
 */

// refetch or invalidate 방법으로도 언어변경 가능
