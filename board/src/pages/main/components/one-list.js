import styled from "styled-components";
const OneList = ({ index, data, onNavigate }) => {
  return (
    <S.Thead>
      <li style={{ width: "10%" }}>{index + 1}</li>
      <S.Title onClick={onNavigate} style={{ width: "65%" }}>
        {data.title}
      </S.Title>
      <li style={{ width: "15%" }}>{data.writer}</li>
      <li style={{ width: "10%" }}>{data.visitors}</li>
    </S.Thead>
  );
};

export default OneList;

const Thead = styled.ul`
  padding: 1rem 1.25rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #aaa;

  li {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    word-break: break-all;
  }
`;

const Title = styled.li`
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

const S = {
  Thead,
  Title,
};
