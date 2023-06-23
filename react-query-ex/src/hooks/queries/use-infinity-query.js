import { useInfiniteQuery } from "@tanstack/react-query";
import MovieApi from "apis/movieApi";
import { QUERYKEYS } from "consts/query-key";

export const useInfiniteScrollQuery = () => {
	const {
		data,
		isLoading,
		isSuccess,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
	} = useInfiniteQuery(
		[QUERYKEYS.MOVIE_POPULAR],
		({ pageParam = 1 }) =>
			MovieApi.getPopularMovie({
				language: "ko-KR",
				api_key: process.env.REACT_APP_TMDB_TOKEN,
				page: pageParam,
			}),
		{
			getNextPageParam: (lastPage, pages) => {
				const currentPage = pages.length;
				return currentPage ? currentPage + 1 : undefined;
			},
		},
	);

	return {
		data,
		isLoading,
		isSuccess,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
	};
};
