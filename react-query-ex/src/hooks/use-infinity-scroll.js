// 무한 스크롤 로직 커스텀훅으로 만들기!
// 만드는 이유? 다른 페이지에서도 재사용할 수 있게
// 뷰와 로직의 분리(관심사 분리!)

const observerRef = useRef(null);

/*
	1. useRef(null)을 사용하여 observerRef라는 Ref 객체를 생성, 이 Ref 객체는 나중에 실제 DOM 요소를 참조할 때 사용
	2. IntersectionObserver : 브라우저의 Intersection Observer API를 사용하여 요소의 가시성 여부를 감지하는 객체
	3. 보이는 경우 fetchNextPage 함수를 호출하여 다음 페이지를 로드
	4. observerRef.current를 통해 실제 DOM 요소를 참조하고, 해당 요소를 관찰 대상으로 등록합니다. observer.observe(element)를 호출하여 element를 관찰
	*/
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

	// 5. 언마운트 또는 element 의 변경 시 관찰 중지를 위해 observer.unobserve(element)를 호출하여 element의 관찰을 중지
	return () => {
		if (element) observer.unobserve(element);
	};
}, [fetchNextPage, hasNextPage]);

// 요약 : 사용자가 스크롤을 할 때 IntersectionObserver를 통해 관찰 대상 요소의 가시성을 감지하고, 설정한 값을 충족할 경우 fetchNextPage 함수를 호출하여 추가 페이지를 로드하는 무한 스크롤 기능을 구현
