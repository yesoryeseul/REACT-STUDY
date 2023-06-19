import { useSearchParams } from "react-router-dom";

const Filtering = () => {
  const [searchParams, setSearchParams] = useSearchParams(); // 쿼리스트링의 파라미터 접근
  let perPage = parseInt(searchParams.get("per_page")) || 10; // get -> per_page의 쿼리스트링 파라미터 값을 가져옴 || 초기값
  let sort = searchParams.get("sort") || "created"; // get -> sort의 쿼리스트링 파라미터 값을 가져옴 || 초기값

  const onSorting = (e) => {
    searchParams.set("sort", e.target.value); // sort의 쿼리스트링 파라미터 값에 option value 값 넣어줌 ex) sort=updated
    setSearchParams(searchParams); // 변경된 쿼리스트링 적용
  };

  const onSortingNumber = (e) => {
    searchParams.set("per_page", e.target.value); // per_page의 쿼리스트링 파라미터 값에 option value 값 넣어줌 ex) per_page=20
    console.log("아주 잘 찍힘", e.target.value);
    setSearchParams(searchParams); // 변경된 쿼리스트링 적용
  };

  return (
    <div>
      <select onChange={onSorting} value={sort}>
        <option value="created">생성순</option>
        <option value="updated">업데이트순</option>
        <option value="comments">댓글순</option>
      </select>
      <select onChange={onSortingNumber} value={perPage}>
        <option value="10">10개 씩</option>
        <option value="20">20개 씩</option>
        <option value="50">50개 씩</option>
      </select>
    </div>
  );
};

export default Filtering;
