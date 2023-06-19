import { useNavigate, useSearchParams } from "react-router-dom";

const Pagination = () => {
  /*
  로직 설계
  1. 게시물 총 갯수 200개 const TOTAL_PAGE = 200
  2. 페이지 네이션 갯수 const pages = Math.ceil(TOTAL_PAGE / perPage)
  3. 해당 숫자 누를 시 쿼리스트링 변경과 리스트 받아오기, 해당 페이지네이션 포커싱
    `/repos/angular/angular-cli/issues?page=1&per_page=10&sort=created`
  4. 페이지 1~10, 11~20 두 그룹으로 나누기
  5. 맨처음 버튼 클릭 시 1페이지로 이동 / 맨끝 버튼 클릭 시 마지막 페이지(pages)로 이동

  * refactor 기존 const getIssueData 함수와 getIssueData(변수); 로직 삭제
    -> 해당 페이지네이션은 쿼리스트링만 바꿔주는 역할
    -> 실제 데이터 받아오는 기능은 issue/index.js 의 useEffect 기능에서 의존성 배열에 넣어준 [page, sort, perPage] 값의 변화에 따라 데이터를 받아오는 것!
  */
  const navigate = useNavigate(); // 쿼리스트링 사용
  const [searchParams, setSearchParams] = useSearchParams();
  let perPage = parseInt(searchParams.get("per_page")) || 10; // perPage undefined인 경우 10개씩 설정
  let page = parseInt(searchParams.get("page")) || 1; // page undefined인 경우 1페이지 설정
  let sort = searchParams.get("sort") || "created"; // sort undefined인 경우 created순 설정

  // 2. 200개 뿌려주기
  const TOTAL_PAGE = 200; // 총 게시물 수
  const pages = Math.ceil(TOTAL_PAGE / perPage); // 페이지 개수

  // 3. 해당 페이지로 이동
  const onChangePage = (newPage) => {
    navigate(`/?page=${newPage}&per_page=${perPage}&sort=${sort}`);
  };

  // 5. < > 페이지로 이동
  const onPrevArrow = () => {
    const prevPage = page > 1 ? page - 1 : 1;
    navigate(`/?page=${prevPage}&per_page=${perPage}&sort=${sort}`);
  };

  const onNextArrow = () => {
    const nextPage = page < pages ? page + 1 : pages;
    navigate(`/?page=${nextPage}&per_page=${perPage}&sort=${sort}`);
  };

  const startPage = (Math.ceil(page / perPage) - 1) * perPage + 1; // 1 ~ 10의 시작페이지 1, 11 ~ 20의 시작페이지 11

  return (
    <div>
      <div>
        <button onClick={() => onChangePage(1)}>맨처음</button>
        <button onClick={onPrevArrow}>{"<"}</button>
        <div>
          {/* 1~ 10 페이지일 때 startPage = 1이므로 pageNumber = 1 + i -> perPage마다 map이 돌아가 페이지 1 ~ 10로 ui 렌더링
          11 ~ 20 페이지일 때 startPage = 11이므로 pageNumber = 11 + i -> perPage마다 map이 돌아가 페이지 11 ~ 20로 ui 렌더링
          */}
          {Array(perPage)
            .fill()
            .map((_, i) => {
              const pageNumber = startPage + i;
              if (pageNumber > pages) return null;
              const btnStyle =
                pageNumber === page
                  ? { background: "black", color: "white" }
                  : null;
              return (
                <button
                  style={btnStyle}
                  key={pageNumber}
                  onClick={() => onChangePage(pageNumber)}
                >
                  {pageNumber}
                </button>
              );
            })}
        </div>
        <button onClick={onNextArrow}>{">"}</button>
        <button onClick={() => onChangePage(pages)}>맨끝</button>
      </div>
    </div>
  );
};

export default Pagination;
