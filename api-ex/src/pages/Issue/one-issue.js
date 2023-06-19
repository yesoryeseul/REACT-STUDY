const OneIssue = ({ issue }) => {
  return (
    <div
      style={{ border: "1px solid red", width: "700px", margin: "10px auto" }}
    >
      <p>{issue.title}</p>
      <p style={{ background: "skyblue" }}>
        댓글 수 : {issue.comments} 생성:{issue.created_at} 업데이트:{" "}
        {issue.updated_at}
      </p>
    </div>
  );
};

export default OneIssue;
