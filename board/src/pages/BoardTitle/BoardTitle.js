import styled from "styled-components";
import { flexCenter } from "../../styles/common";

const BoardTitle = () => {
  return <BoardTitleStyle>게시판</BoardTitleStyle>;
};

export default BoardTitle;

const BoardTitleStyle = styled.h2`
  font-size: ${({ theme }) => theme.FONT_SIZE.h2};
  ${flexCenter};
  margin: 24px 0;
`;
