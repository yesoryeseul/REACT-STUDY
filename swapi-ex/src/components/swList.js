// import { useQuery } from "@tanstack/react-query";
// import styled from "styled-components";

// const SwList = () => {
// 	const fetchRepositories = async () => {
// 		const response = await fetch(`https://swapi.dev/api/people`);
// 		return response.json();
// 	};

// 	const { data } = useQuery({
// 		queryKey: ["swapi"],
// 		queryFn: fetchRepositories,
// 	});

// 	console.log("data", data);
// 	console.log("data.results", data.results);

// 	return (
// 		<div>
// 			<S.Title>StarWards API</S.Title>
// 			<ul>
// 				{data.results.map(person => (
// 					<li>{person.name}</li>
// 				))}
// 			</ul>
// 		</div>
// 	);
// };
// export default SwList;

// const Title = styled.h1`
// 	text-align: center;
// 	font-size: 32px;
// 	font-weight: bold;
// 	margin: 20px 0;
// `;

// const Lists = styled.li`
// 	margin: 0 auto;
// 	margin-bottom: 20px;
// 	padding: 20px;
// 	width: 500px;
// 	border: 1px solid #aaa;
// 	border-radius: 4px;
// `;

// const Name = styled.p`
// 	font-size: 20px;
// 	font-weight: bold;
// 	margin-bottom: 10px;
// `;

// const S = {
// 	Title,
// 	Lists,
// 	Name,
// };
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";

function List() {
	const LIMIT = 82;

	const fetchRepository = async id => {
		const response = await fetch(`https://swapi.dev/api/people/${id}/`);
		return response.json();
	};

	const { data } = useQuery({
		queryKey: ["swapi"],
		queryFn: () => fetchRepository(LIMIT),
	});

	console.log("data", data);

	const urls = Array.from(
		{ length: LIMIT },
		(_, index) => `https://swapi.dev/api/people/${index + 1}/`,
	);

	console.log("url", urls);

	// const { data: peopleData } = useQuery(urls, async (key, url) => {
	// 	const response = await fetch(url);
	// 	return response.json();
	// });

	// console.log("peopleData", peopleData);

	// const peopleList = Object.values(peopleData).filter(
	// 	value => typeof value === "object" && value !== null,
	// );

	return (
		<div>
			<S.Title>StarWards API</S.Title>
			<ul>
				{/* {peopleList.map((person, index) => (
					<li key={index}>
						<p>Name: {person.name}</p>
						<p>Height: {person.height}</p>
					</li>
				))} */}
			</ul>
		</div>
	);
}

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
