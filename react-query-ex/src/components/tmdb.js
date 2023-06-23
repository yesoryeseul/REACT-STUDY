// consts, hooks/queries 로직 분리하여 훅함수화 하여 사용 + 무한 스크롤 적용
import { useRef, useEffect } from "react";
import { Skeleton } from "@mui/material";
import { useInfiniteScrollQuery } from "hooks/queries/use-infinity-query";

const TmdbPopular = () => {
	const imgBasicUrl = process.env.REACT_APP_IMG_BASIC_URL;
	// console.log("imgBasicUrl", imgBasicUrl);

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

	const observerRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				const [target] = entries;
				if (target.isIntersecting && hasNextPage) {
					fetchNextPage();
				}
			},
			{ threshold: 0.5 }, // 스크롤이 50% 이상 보일 때 fetchNextPage() 호출
		);

		const element = observerRef.current;
		if (element) observer.observe(element);

		return () => {
			if (element) observer.unobserve(element);
		};
	}, [fetchNextPage, hasNextPage]);

	console.log("TmdbPopular", data);

	if (!data || !data.pages) return null;
	const result = data.pages.flatMap(page => page.data.results);

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
