import { useInfiniteQuery } from "@tanstack/react-query";

export const useInfiniteScrollQuery = fetchFn => {
	const {
		data,
		isLoading,
		isSuccess,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
	} = useInfiniteQuery(["get/popular"], fetchFn, {
		getNextPageParam: (lastPage, pages) => {
			const currentPage = pages.length;
			return currentPage ? currentPage + 1 : undefined;
		},
	});

	return {
		data,
		isLoading,
		isSuccess,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
	};
};
