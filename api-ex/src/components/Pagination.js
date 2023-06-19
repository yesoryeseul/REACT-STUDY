import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getData } from "../reducer/data";

const Pagination = () => {
  /*
  로직 설계
  1. 게시물 총 갯수 200개 const TOTAL_PAGE = 200
  2. 페이지 네이션 갯수 const pages = Math.ceil(TOTAL_PAGE / perPage)
  3. 해당 숫자 누를 시 쿼리스트링 변경과 리스트 받아오기, 해당 페이지네이션 포커싱
    `/repos/angular/angular-cli/issues?page=1&per_page=10&sort=created`
  4. 페이지 1~10, 11~20 두 그룹으로 나누기
  5. 맨처음 버튼 클릭 시 1페이지로 이동 / 맨끝 버튼 클릭 시 마지막 페이지(pages)로 이동
  */
  const navigate = useNavigate(); // 쿼리스트링 사용
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  let perPage = parseInt(searchParams.get("per_page")) || 10; // perPage undefined인 경우 10개씩 설정
  let page = parseInt(searchParams.get("page")) || 1; // page undefined인 경우 1페이지 설정
  let sort = searchParams.get("sort") || "created"; // sort undefined인 경우 created순 설정

  // 2. 200개 뿌려주기
  const TOTAL_PAGE = 200; // 총 게시물 수
  const pages = Math.ceil(TOTAL_PAGE / perPage); // 페이지 개수

  const getIssueData = async (newPage) => {
    try {
      await dispatch(getData({ page: newPage, perPage, sort }));
    } catch (err) {
      console.error(err);
    }
  };
  // 3. 해당 페이지로 이동
  const onChangePage = (newPage) => {
    navigate(`/?page=${newPage}&per_page=${perPage}&sort=${sort}`);
    getIssueData(newPage);
  };

  // 4. 페이지 그룹 2개로 나누기
  /*
  ex 200개를 10개씩 보여준다면 현재 20페이지
    Math.ceil(200 / 10) = 20 / 2?
  */
  const pageGroup = Math.ceil(page / perPage); //  ex Math.ceil(1 ~ 10 / 10) = 1 그룹, Math.ceil(11 ~ 20 / 10) = 2 그룹
  const startPage = (pageGroup - 1) * perPage + 1; // 그룹 당 시작 페이지
  // 1그룹의 경우 (1 - 1) * 10 + 1 = 1
  // 2그룹의 경우 (2 - 1) * 10 + 1 = 11
  // let endPage = Math.min(pageGroup * perPage, pages); // 그룹 당 마지막 페이지
  // 1그룹의 경우 (1*10), 20(현재 페이지 개수) 중 작은 값 10
  // 2그룹의 경우 (2*10), 20(현재 페이지 개수) 중 작은 값 20

  // 5. < > 페이지로 이동
  const onPrevArrow = () => {
    const prevPage = Math.max(1, (pageGroup - 1) * perPage); // 1, 0  1, 10
    navigate(`/?page=${prevPage}&per_page=${perPage}&sort=${sort}`);
    getIssueData(prevPage);
  };

  const onNextArrow = () => {
    const nextPage = Math.min(pageGroup * perPage + 1, pages);
    navigate(`/?page=${nextPage}&per_page=${perPage}&sort=${sort}`);
    getIssueData(nextPage);
  };

  return (
    <div>
      <div>
        <button onClick={() => onChangePage(1)}>맨처음</button>
        <button onClick={onPrevArrow}>{"<"}</button>
        <div>
          {Array(perPage)
            .fill()
            .map((_, i) => {
              const pageNumber = startPage + i;
              if (pageNumber > pages) return null;
              return (
                <button
                  key={pageNumber}
                  onClick={() => onChangePage(pageNumber)}
                >
                  {pageNumber}
                </button>
              );
            })}
        </div>
        {pageGroup < Math.ceil(pages / perPage) && (
          <button onClick={onNextArrow}>{">"}</button>
        )}
        <button onClick={() => onChangePage(pages)}>맨끝</button>
      </div>
    </div>
  );
};

export default Pagination;
