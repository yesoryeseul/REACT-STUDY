import styled from "styled-components";
import { BoardWidth, flexCenter } from "../../styles/common";
import { useState } from "react";
import dataList from "../../data.js";
import OneList from "./components/one-list";
import { useNavigate } from "react-router-dom";
import Modal from "./components/Modal";
import usePrevModal from "../../hooks/use-prevmodal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  let [data, setData] = useState(dataList);
  const [isAddContentModal, setIsAddContentModal, onAddContent] =
    usePrevModal(false);
  const navigate = useNavigate();

  const onNavigateDetail = (number) => {
    navigate(`/detail/${number}`);
  };

  //  글 추가 함수
  const addContent = (title) => {
    return new Promise((resolve) =>
      setTimeout(() => {
        const newContent = {
          id: Math.floor(Math.random() * 100000),
          writer: "김예슬",
          title,
          visitors: Math.floor(Math.random() * 100),
        };
        resolve(newContent);
      }, 3000)
    ).then((content) => {
      setData([...data, content]);
      setIsAddContentModal(false);
    });
  };

  const showContentModal = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    toast.promise(addContent(title), {
      pending: "TODO LOADING",
      success: "TODO SUCCESS",
      error: "TODO ERROR",
    });
  };

  const toastOption = {
    autoClose: 2000,
    theme: "colored",
  };
  return (
    <>
      {/* <S.BoardTitle>게시판</S.BoardTitle> */}
      {/* {isAddContentModal && <Modal />} 얘 적용 전에 toastMessage 부터 */}
      {isAddContentModal && (
        <Modal onAddContent={showContentModal} onClose={onAddContent} />
      )}
      {/* {isAddContentModal && <Modal onClose={onAddContent} />} */}
      <S.Wrapper>
        <S.Container>
          <S.Thead>
            <li style={{ width: "10%" }}>번호</li>
            <li style={{ width: "65%" }}>제목</li>
            <li style={{ width: "15%" }}>작성자</li>
            <li style={{ width: "10%" }}>조회</li>
          </S.Thead>
          {data
            .map((item, index) => (
              <OneList
                index={index}
                data={item}
                onNavigate={() => {
                  onNavigateDetail(item.number);
                }}
              />
            ))
            .reverse()}
        </S.Container>
        <S.TheadBtn>
          <S.AddContentBtn onClick={onAddContent}>작성하기</S.AddContentBtn>
        </S.TheadBtn>
      </S.Wrapper>
      <ToastContainer {...toastOption} />
    </>
  );
};

export default Main;

const BoardTitle = styled.h2`
  font-size: ${({ theme }) => theme.FONT_SIZE.h2};
  ${flexCenter};
  margin-bottom: 24px;
`;

const Wrapper = styled.div`
  height: calc(100vh - 60px);
  padding-bottom: 60px;
  ${flexCenter};
  flex-direction: column;
`;

const Thead = styled.ul`
  border-bottom: 1px solid ${({ theme }) => theme.PALETTE.primary[500]};
  padding: 1rem 1.25rem;
  display: flex;
  text-align: center;

  li {
    font-weight: 700;
  }
`;

const NumberLi = styled.li`
  width: 20%;
`;

const Container = styled.div`
  ${BoardWidth}
  height: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.PALETTE.primary[200]};
  position: relative;
  border-radius: 8px;
`;

const TheadBtn = styled.ul`
  ${BoardWidth}
  display: flex;
  -webkit-box-pack: justify;
  justify-content: flex-end;
`;

const AddContentBtn = styled.button`
  cursor: pointer;
  padding: 0.75rem;
  font-size: ${({ theme }) => theme.FONT_SIZE.medium};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  margin-top: 1rem;
  border-radius: 8px;
`;

const S = {
  Wrapper,
  Container,
  BoardTitle,
  Thead,
  NumberLi,
  AddContentBtn,
  TheadBtn,
};
