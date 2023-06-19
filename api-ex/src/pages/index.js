import { useDispatch, useSelector } from "react-redux";
import { getData } from "../reducer/data";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import OneIssue from "./Issue/one-issue";
import Pagination from "../components/Pagination";
import Filtering from "../components/Filtering";

const IssueData = () => {
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.issue.issues);
  const { loading } = useSelector((state) => state.issue.getDataState);

  const [searchParams, setSearchParams] = useSearchParams();
  let perPage = parseInt(searchParams.get("per_page")) || 10;
  let page = searchParams.get("page") || 1;
  let sort = searchParams.get("sort") || "created";

  useEffect(() => {
    getIssueData();
  }, [page, sort, perPage]);

  // 해당 레포지토리의 이슈페이지 데이터 가져오기
  const getIssueData = async () => {
    try {
      await dispatch(getData({ page, perPage, sort }));
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <h2>데이터 받아오는 중!</h2>;

  return (
    <div>
      {datas.map((issue) => (
        <OneIssue issue={issue} />
      ))}
      <Pagination />
      <Filtering />
    </div>
  );
};

export default IssueData;
