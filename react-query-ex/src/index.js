import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// QueryClient : 쿼리를 관리하고 캐싱하는 역할
const client = new QueryClient({
	defaultOptions: { queries: { suspense: true } },
	// 쿼리 기본 옵션 설정
	// suspense 옵션 true로 설정시 쿼리가 로딩 중일 때 React Suspense를 사용할 수 있음
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<QueryClientProvider client={client}>
			<React.Suspense fallback="Loading...">
				{/* 로딩 중일 때 표시할 fallback 컨텐츠를 설정 */}
				<App />
			</React.Suspense>
		</QueryClientProvider>
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
