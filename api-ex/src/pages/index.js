import { useDispatch, useSelector } from "react-redux";
import { getData } from "../reducer/data";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const IssueData = () => {
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.issue.issues);
  // const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [perPage, sePperPage] = useState(10);
  const [sort, setSort] = useState("created");

  // 해당 레포지토리의 이슈페이지 데이터 가져오기
  const getIssueData = async () => {
    try {
      await dispatch(getData(page, perPage, sort));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getIssueData();
  }, []);

  return (
    <div>
      {datas.map((issue) => (
        <div>{issue.title}</div>
      ))}
    </div>
  );
};

export default IssueData;
