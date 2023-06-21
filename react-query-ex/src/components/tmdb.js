// export const getIssue = createAsyncThunk(
// 	"issue/getIssue",
// 	async ({ owner, repo, page, perPage, sort }) => {
// 		const res = await IssueApi.getIssue(owner, repo, page, perPage, sort);
// 		console.log("res값: ", res);
// 		return res.data;
// 	},

import { useQuery } from "@tanstack/react-query";
import MovieApi from "apis/movieApi";

// );
const TmdbPopular = () => {
	const { data, isLoading, isSuccess } = useQuery(["get/popular"], () =>
		MovieApi.getPopularMovie({
			language: "ko-KR",
			api_key: process.env.REACT_APP_TMDB_TOKEN,
		}),
	);

	console.log(process.env.REACT_APP_BACKEND_URL);
	console.log("TmdbPopular", data);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (!data) {
		return <div>Data is not available</div>;
	}

	return (
		<div>
			<div>useQuery로 데이터 가져오기</div>
			{isSuccess &&
				data.data.results.map(movie => <p>{movie.original_title}</p>)}
		</div>
	);
};

export default TmdbPopular;
