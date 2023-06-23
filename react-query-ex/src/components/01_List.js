// 현재 이 로직은 실행되지 않음

import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import styled from "styled-components";

// 1. api 데이터 비동기로 가져오기
const fetchProjects = async (page = 1) => {
	const res = await fetch(
		`https://api.github.com/search/repositories?q=topic:reactjs&per_page=30&page=${page}`,
	);
	return res.json();
};

const List = () => {
	// const { data } = useQuery("repositories", fetchProjects); // 스트링 방식은 이제 지원x

	// 2. 데이터 렌더링
	/* useQuery => 데이터를 가져와서 렌더링하는 역할
    queryKey 매개변수는 쿼리의 고유 식별자를 설정하는 배열
    queryFn 매개변수에는 데이터를 가져오는 비동기 함수인 fetchProjects를 전달
  */
	// const { data } = useQuery({
	// 	queryKey: ["repositories"],
	// 	queryFn: fetchProjects,
	// });
	// -> 4. useInfiniteQuery 로 바꾸기

	const { data, hasNextPage, fetchNextPage } = useInfiniteQuery({
		queryKey: ["repositories"],
		queryFn: ({ pageParam = 1 }) => fetchProjects(pageParam),
		option: {
			getNextPageParam: (lastPage, allPages) => {
				const maxPages = lastPage.total_count / 30;
				const nextPage = allPages.length + 1;
				return nextPage <= maxPages ? nextPage : undefined;
			},
		},
	});

	// 3. 스크롤 이벤트
	useEffect(() => {
		let fetching = false;
		const onScroll = async e => {
			const { scrollHeight, scrollTop, clientHeight } =
				e.target.scrollingElement;

			// 3796 - 3082.39990234375 <= 714
			if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.5) {
				fetching = true;
				console.log("hi");
				if (hasNextPage) await fetchNextPage();
				fetching = false; // reset
			}
		};

		document.addEventListener("scroll", onScroll);
		// cleanup
		return () => {
			document.removeEventListener("scroll", onScroll);
		};
	}, []);

	console.log(data);
	console.log("undefined", hasNextPage);

	return (
		<div>
			<S.Title>Infinite Scroll</S.Title>
			<ul>
				{data.pages.map(page =>
					page.items.map(repo => (
						<S.Lists key={repo.id}>
							<S.Name>{repo.name}</S.Name>
							<p>{repo.description}</p>
						</S.Lists>
					)),
				)}
			</ul>
		</div>
	);
};

export default List;

const Title = styled.h1`
	text-align: center;
	font-size: 32px;
	font-weight: bold;
	margin: 20px 0;
`;

const Lists = styled.li`
	margin: 0 auto;
	margin-bottom: 20px;
	padding: 20px;
	width: 500px;
	border: 1px solid #aaa;
	border-radius: 4px;
`;

const Name = styled.p`
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 10px;
`;

const S = {
	Title,
	Lists,
	Name,
};
