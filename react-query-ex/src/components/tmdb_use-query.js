// 무한 스크롤 아닌 데이터만 뿌려주기
// import useGetMovies from "hooks/queries/use-queries";

import { useGetMovies } from "hooks/queries/use-queries";
import { useState } from "react";

const TmdbPopularNoInfinite = () => {
	const imgBasicUrl = process.env.REACT_APP_IMG_BASIC_URL;
	const [selectedLanguage, setSelectedLanguage] = useState("ko-KR");

	let popularMovies;

	const cachedPopularMovies = useGetMovies.ListMovies(
		"popular",
		{},
		selectedLanguage,
	);

	console.log("cachedPopularMovies", cachedPopularMovies);

	if (!cachedPopularMovies.data) popularMovies = []; // data가 없을 때 빈배열
	else {
		// data 있을 때
		popularMovies = cachedPopularMovies.data.data.results;
	}
	console.log(popularMovies);

	console.log("언어 변경", selectedLanguage);
	const onLanuageChange = e => {
		setSelectedLanguage(e.target.value);
	};

	// const result = data.pages.flatMap(page => page.data.results);
	// console.log(result);

	// if (!data || !data.pages) return null;
	// if (isLoading) {
	// 	return null;
	// }

	// if (typeof data === "undefined") return <div>로딩중</div>;

	// if (!isSuccess) {
	// 	return null;
	// }
	// console.log("isLoading", isLoading);

	return (
		<>
			<select value={selectedLanguage} onChange={onLanuageChange}>
				<option value="ko-KR">한국어</option>
				<option value="en-US">English</option>
			</select>
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
				{popularMovies.map(movie => {
					return (
						<div style={{ width: "20%", marginBottom: "20px" }}>
							<img
								src={`${imgBasicUrl}${movie.poster_path}`}
								style={{ borderRadius: "4px", height: "300px" }}
							/>
							<p key={movie.id} style={{ fontWeight: "bold" }}>
								{movie.title}
							</p>
							<span>⭐ {(movie.vote_average / 2).toFixed(1)}</span>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default TmdbPopularNoInfinite;
