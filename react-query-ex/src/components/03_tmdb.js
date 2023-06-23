// import { useQuery } from "@tanstack/react-query";
// import MovieApi from "apis/movieApi";

// // );
// const TmdbPopular = () => {
// 	const { data, isLoading, isSuccess } = useQuery(["get/popular"], () =>
// 		MovieApi.getPopularMovie({
// 			language: "ko-KR",
// 			api_key: process.env.REACT_APP_TMDB_TOKEN,
// 		}),
// 	);

// 	console.log(process.env.REACT_APP_BACKEND_URL);
// 	console.log("TmdbPopular", data);

// 	if (isLoading) {
// 		return <div>Loading...</div>;
// 	}

// 	if (!data) {
// 		return <div>Data is not available</div>;
// 	}

// 	return (
// 		<div>
// 			<div>useQuery로 데이터 가져오기</div>
// 			{isSuccess &&
// 				data.data.results.map(movie => <p>{movie.original_title}</p>)}
// 		</div>
// 	);
// };

// export default TmdbPopular;

// learn more 클릭 이벤트로 불러오기
// import { useInfiniteQuery } from "@tanstack/react-query";
// import MovieApi from "apis/movieApi";

// const TmdbPopular = () => {
// 	const fetchMovies = ({ pageParam = 1 }) =>
// 		MovieApi.getPopularMovie({
// 			language: "ko-KR",
// 			api_key: process.env.REACT_APP_TMDB_TOKEN,
// 			page: pageParam,
// 		}).then(response => response.data);

// 	const { data, isLoading, isSuccess, fetchNextPage, hasNextPage } =
// 		useInfiniteQuery(["get/popular"], fetchMovies, {
// 			getNextPageParam: (lastPage, pages) => {
// 				const currentPage = pages.length;
// 				return currentPage < 10 ? currentPage + 1 : undefined;
// 			},
// 		});

// 	console.log(process.env.REACT_APP_BACKEND_URL);
// 	console.log("TmdbPopular", data);

// 	if (isLoading) {
// 		return <div>Loading...</div>;
// 	}

// 	if (!isSuccess) {
// 		return <div>Data is not available</div>;
// 	}

// 	const allTitles = data.pages.flatMap(page => page.results);

// 	return (
// 		<div>
// 			<div>useInfiniteQuery로 데이터 가져오기</div>
// 			{allTitles.map(movie => (
// 				<p key={movie.id}>{movie.original_title}</p>
// 			))}

// 			{hasNextPage && (
// 				<button onClick={() => fetchNextPage()}>Load More</button>
// 			)}
// 		</div>
// 	);
// };

// export default TmdbPopular;

import { useRef } from "react";
import { Skeleton } from "@mui/material";
import { useInfiniteScrollQuery } from "hooks/queries/use-infinity-query";

const TmdbPopular = () => {
	const imgBasicUrl = process.env.REACT_APP_IMG_BASIC_URL;
	// console.log("imgBasicUrl", imgBasicUrl);

	const observerRef = useRef(null);

	// const fetchMovies = ({ pageParam = 1 }) =>
	// 	MovieApi.getPopularMovie({
	// 		language: "ko-KR",
	// 		api_key: process.env.REACT_APP_TMDB_TOKEN,
	// 		page: pageParam,
	// 	}).then(response => response.data);

	// const {
	// 	data,
	// 	isLoading,
	// 	isSuccess,
	// 	fetchNextPage,
	// 	hasNextPage,
	// 	isFetchingNextPage,
	// } = useInfiniteQuery(["get/popular"], fetchMovies, {
	// 	getNextPageParam: (lastPage, pages) => {
	// 		const currentPage = pages.length;
	// 		return currentPage ? currentPage + 1 : undefined;
	// 	},
	// });

	// useInfiniteScrollQuery -> hooks 의 재사용
	const {
		data,
		isLoading,
		isSuccess,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
	} = useInfiniteScrollQuery();

	// console.log(process.env.REACT_APP_BACKEND_URL);
	console.log("TmdbPopular", data);

	if (!data || !data.pages) return null;
	if (!data || !data.pages) return null;
	const result = data.pages.flatMap(page => page.data.results);

	// useEffect(() => {
	// 	const observer = new IntersectionObserver(
	// 		entries => {
	// 			const [target] = entries;
	// 			if (target.isIntersecting && hasNextPage) {
	// 				fetchNextPage();
	// 			}
	// 		},
	// 		{ threshold: 0.5 }, // 스크롤이 50% 이상 보일 때 fetchNextPage() 호출
	// 	);

	// 	const element = observerRef.current;
	// 	if (element) observer.observe(element);

	// 	return () => {
	// 		if (element) observer.unobserve(element);
	// 	};
	// }, [fetchNextPage, hasNextPage]);

	// const result = data.pages[0].data.results;
	// console.log(result);
	// useEffect(() => {
	// 	const options = {
	// 		root: null,
	// 		rootMargin: "0px",
	// 		threshold: 1.0,
	// 	};

	// 	const observer = new IntersectionObserver(entries => {
	// 		if (entries[0].isIntersecting && hasNextPage) {
	// 			fetchNextPage();
	// 		}
	// 	}, options);

	// 	if (observerRef.current) {
	// 		observer.observe(observerRef.current);
	// 	}

	// 	return () => {
	// 		if (observerRef.current) {
	// 			observer.unobserve(observerRef.current);
	// 		}
	// 	};
	// }, [hasNextPage, fetchNextPage]);

	// 다른 무한스크롤 로직
	// const handleObserver = useCallback(
	// 	entries => {
	// 		const [target] = entries;
	// 		if (target.isIntersecting && hasNextPage) {
	// 			fetchNextPage();
	// 		}
	// 	},
	// 	[fetchNextPage, hasNextPage],
	// );

	// // console.log("observerRef.current", observerRef.current);

	// useEffect(() => {
	// 	const element = observerRef.current;
	// 	if (!element) return; // 요소가 존재하지 않을 경우 빠른 반환

	// 	const option = { threshold: 0 };

	// 	const observer = new IntersectionObserver(handleObserver, option);
	// 	observer.observe(element);
	// 	return () => observer.unobserve(element);
	// }, [handleObserver]);
	//fetchNextPage, hasNextPage,

	if (isLoading) {
		return null;
	}

	if (typeof data === "undefined") return <div>로딩중</div>;

	if (!isSuccess) {
		return null;
	}
	console.log("isLoading", isLoading);

	const allTitles = data.pages.flatMap(page => page.results);
	// data.pages.result 를 선택하기 위해 flatMap으로 평탄화
	// ex) 일반 map을 사용하면 [[1], [2], [3]] -> flatMap [1, 2, 3]
	console.log(allTitles);
	return (
		<>
			<h1
				style={{
					textAlign: "center",
					fontSize: "42px",
					fontWeight: "bold",
					marginTop: "20px",
				}}
			>
				POPULAR MOVIE
			</h1>
			<div
				style={{
					width: "1120px",
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					justifyContent: "space-around",
					margin: "70px auto",
				}}
			>
				{/* <div>useInfiniteQuery로 데이터 가져오기</div> */}
				{result.map(movie => {
					return (
						<div style={{ width: "20%", marginBottom: "20px" }}>
							{isLoading ? (
								<Skeleton width={200} height={300} />
							) : (
								<img
									src={`${imgBasicUrl}${movie.poster_path}`}
									style={{ borderRadius: "4px", height: "300px" }}
								/>
							)}
							<p key={movie.id} style={{ fontWeight: "bold" }}>
								{movie.title}
							</p>
							<span>⭐ {(movie.vote_average / 2).toFixed(1)}</span>
						</div>
					);
				})}
				{/* <div ref={observerRef} style={{ height: "10px" }} /> */}
				<div className="loader" ref={observerRef}>
					{isFetchingNextPage && hasNextPage ? "Loading..." : null}
				</div>
			</div>
		</>
	);
};

export default TmdbPopular;
