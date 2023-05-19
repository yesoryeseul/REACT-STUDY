import styled from "styled-components";
import { flexAlignCenter } from "../../styles/common";

const Main = ({ title, sub, more, mainImg }) => {
  return (
    <S.MainBg bgImg={mainImg}>
      <S.MainDiv>
        <S.Mainh2>{title}</S.Mainh2>
        <S.Mainh3>{sub}</S.Mainh3>
        <LearnMore href="#">{more} &gt;</LearnMore>
      </S.MainDiv>
    </S.MainBg>
  );
};

export default Main;
/* background-image: url(${bg}); // 이렇게 해야 먹는다..! */

const MainBg = styled.div`
  height: 520px;
  background-image: ${(props) =>
    `url(${props.bgImg})`}; // 컴포넌트화 하여 여러개 쓰고 싶다면..? props로 넘겨주기
  background-color: ${({ theme }) => theme.PALETTE.background["main"]};
  background-position: center;
  background-repeat: no-repeat;
`;

const MainDiv = styled.div`
  ${flexAlignCenter}
  flex-direction: column;
  max-width: 424px;
  margin: 0 auto;
  padding: 42px 0 168px 0;
  text-align: center;

  h2,
  h3 {
    color: ${({ theme }) => theme.PALETTE["fontColor"]};
  }
`;

const Mainh2 = styled.h2`
  font-size: ${({ theme }) => theme.FONT_SIZE.h2};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT["middle"]};
`;

const Mainh3 = styled.h2`
  font-size: ${({ theme }) => theme.FONT_SIZE["h3"]};
  margin-top: 1rem;
`;

const LearnMore = styled.a`
  color: ${({ theme }) => theme.PALETTE.brandColor};
  font-size: ${({ theme }) => theme.FONT_SIZE.large};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.semiBold};
  margin-top: 1rem;
`;

const S = {
  MainBg,
  MainDiv,
  Mainh2,
  Mainh3,
  LearnMore,
};
