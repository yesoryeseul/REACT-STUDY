import "./App.css";
import GlobalStyles from "styles/global";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TmdbPopular from "components/03_tmdb";

function App() {
	const client = new QueryClient({
		defaultOptions: {
			// 기본 옵션
			queries: {
				staleTime: 0, // 0은 default라 0일 경우는 굳이 써줄 필요는 없긴 함
				cacheTime: 1000 * 60 * 5,
			},
		},
	});

	return (
		<QueryClientProvider client={client}>
			<GlobalStyles />
			{/* <List /> */}
			{/* <SkeletonTest /> */}
			<TmdbPopular />
		</QueryClientProvider>
	);
}

export default App;
