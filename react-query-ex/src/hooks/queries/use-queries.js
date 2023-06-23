import useQuery from "@tanstack/react-query";
import MovieApi from "apis/movieApi";
import { QUERYKEYS } from "consts/query-key";

const useGetMovies = () => {
	const { data, isLoading, isSuccess } = useQuery(
		[QUERYKEYS.MOVIE_POPULAR],
		() =>
			MovieApi.getPopularMovie({
				language: "ko-KR",
				api_key: process.env.REACT_APP_TMDB_TOKEN,
			}),
	);
	return { data, isLoading, isSuccess };
};

export default useGetMovies;
