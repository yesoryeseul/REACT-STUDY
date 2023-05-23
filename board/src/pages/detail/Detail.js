import { useNavigate, useParams } from "react-router-dom";
import dataList from "../../data.js";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { BoardWidth, flexCenter, onBtn } from "../../styles/common.js";

export default function Detail() {
  const params = useParams();
  const navigate = useNavigate();
  console.log(params.number);

  const boardPage = dataList;
  console.log(boardPage);
  const [data, setData] = useState();
  // console.log(data);
  // const [boardData, setBoardData] = useState(boardPage);

  const [newComments, setNewComments] = useState({
    writer: "",
    comment: "",
  });

  const [editIndex, setEditIndex] = useState(null);
  const [editComment, setEditComment] = useState("");

  // 글 번호와 일치하는 상세페이지 연결
  useEffect(() => {
    const boardPageDetail = boardPage.find(
      (board) => board.number === params.number
    );

    setData(boardPageDetail);

    // 없는 번호 페이지 접근시 메인페이지로 이동
    if (!boardPageDetail) {
      navigate("/");
    }
  }, [params.number, boardPage, navigate]);

  // 댓글 입력 이벤트
  const onAddValue = (e, value) => {
    setNewComments({
      ...newComments,
      [value]: e.target.value,
    });
  };

  // 댓글 추가 함수
  const onAddCommentContent = () => {
    if (newComments.writer === "" || newComments.comment === "") return;
    const newComment = {
      writer: newComments.writer,
      comment: newComments.comment,
      myComment: true,
    };
    setData((prevData) => ({
      ...prevData,
      comments: [...prevData.comments, newComment],
    }));
    setNewComments({
      writer: "",
      comment: "",
    });
  };

  // 댓글 수정 함수
  /* 수정 버튼을 눌렀을 때 isEditMode가 true가 되어 textarea가 떠야함
      새로 입력한 댓글 textarea에 입력된 e.target.value의 값을 저장하여 그걸 최종 결과로 나타내준다. 불변성 법칙 지키면서
  */
  const onUpdateComment = (index, updatedComment) => {
    const updatedComments = [...data.comments];
    updatedComments[index].comment = updatedComment;
    setData((prevData) => ({
      ...prevData,
      comments: updatedComments,
    }));
    setEditIndex(null);
  };

  // 댓글 삭제 함수
  const onDeleteComment = (index) => {
    setData((prevComment) => ({
      ...prevComment,
      comments: prevComment.comments.filter((_, idx) => idx !== index),
    }));
  };

  return (
    data && (
      <>
        {/* <div>{params.number}</div> */}
        <S.Wrapper>
          <S.Title>{data.title}</S.Title>
          <S.Info>
            <li>
              <S.Span>작성자</S.Span> {data.writer}
            </li>
            <li>
              <S.Span style={{ borderLeft: "1px solid #777" }}>조회수</S.Span>{" "}
              <span style={{ padding: "1rem" }}>{data.visitors}</span>
            </li>
          </S.Info>
          <S.Content>{data.content}</S.Content>
          <S.CommentWrapper>
            <S.CommentWriter
              placeholder="작성자"
              onChange={(e) => onAddValue(e, "writer")}
              value={newComments.writer}
            ></S.CommentWriter>
            <S.CommentBox
              placeholder="댓글을 입력해주세요."
              onChange={(e) => onAddValue(e, "comment")}
              value={newComments.comment}
            ></S.CommentBox>
            <S.CommentBtn onClick={onAddCommentContent}>등록</S.CommentBtn>
          </S.CommentWrapper>
          <S.CommentWrapperList>
            {data.comments.map((item, index) =>
              data.comments[index].myComment ? (
                <div>
                  <p>{item.writer}</p>
                  <S.CrudBtnsContainer>
                    <S.CrudBtnsBox>
                      {editIndex === index ? (
                        <S.NewCommentBox
                          onChange={(e) => {
                            setEditComment(e.target.value);
                          }}
                          value={editComment}
                        />
                      ) : (
                        <span>{item.comment}</span>
                      )}
                      <div>
                        {editIndex === index ? (
                          <button
                            onClick={() => onUpdateComment(index, editComment)}
                          >
                            저장
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              setEditComment("");
                              setEditIndex(index); // setEditIndex(3) 인덱스로 접근하여 해당 댓글을 찾음, editIndex === index조건이 true가 되어 댓글 수정 textarea 활성화, 입력값을 저장하여 업데이트
                            }}
                          >
                            수정
                          </button>
                        )}
                        {/* <button onClick={() => setIsEditMode((prev) => !prev)}>
                          {isEditMode ? "저장" : "수정"}
                        </button> */}
                        {/* <button onClick={onUpdateComment}>수정</button> */}
                        <S.DeleteBtn onClick={() => onDeleteComment(index)}>
                          삭제
                        </S.DeleteBtn>
                      </div>
                    </S.CrudBtnsBox>
                  </S.CrudBtnsContainer>
                </div>
              ) : (
                <div>
                  <p>{item.writer}</p>
                  <p>{item.comment}</p>
                </div>
              )
            )}
          </S.CommentWrapperList>
        </S.Wrapper>
      </>
    )
  );
}

const Wrapper = styled.div`
  padding-bottom: 60px;
  ${flexCenter};
  flex-direction: column;
`;

const Title = styled.div`
  ${BoardWidth};
  padding: 1rem;
  border: 1px solid black;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT["bold"]};
`;

const Info = styled.ul`
  border: 1px solid #777;
  border-top: none;
  display: flex;
  justify-content: space-between;
  width: 600px;
`;

const Span = styled.span`
  padding: 0.75rem 1rem;
  background: #ebebeb;
  display: inline-block;
  border-right: 1px solid #777;
`;

const Content = styled.div`
  ${BoardWidth}
  padding: 2rem 0px 15rem;
`;

const CommentWrapper = styled.div`
  ${BoardWidth}
  display: flex;
`;

const CommentBox = styled.textarea`
  width: 70%;
  padding: 1rem 0 0 1rem;
  margin-left: 1rem;
`;

const CommentWriter = styled.textarea`
  width: 14%;
  padding: 1rem 0 0 1rem;
`;

const CommentBtn = styled.button`
  width: 16%;
  margin-left: 1rem;
  ${onBtn}
`;

const CommentWrapperList = styled.div`
  ${BoardWidth}
  display: flex;
  flex-direction: column;
  div {
    padding-top: 1rem;
    border-bottom: 1px solid #ccc;
  }
  div > p:first-child {
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["bold"]};
  }

  div > p:last-child {
    margin: 1rem 0;
  }
`;

const CrudBtnsContainer = styled.p`
  div {
    padding: 0;
    border: none;
  }

  div > button:first-of-type {
    margin-right: 1rem;
  }

  div button {
    padding: 4px 8px;
    ${onBtn}
  }
`;

const CrudBtnsBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DeleteBtn = styled.button``;

const NewCommentBox = styled.textarea`
  width: 80%;
`;

const S = {
  Wrapper,
  Title,
  Info,
  Span,
  Content,
  CommentWrapper,
  CommentBox,
  CommentWriter,
  CommentBtn,
  CommentWrapperList,
  CrudBtnsContainer,
  CrudBtnsBox,
  DeleteBtn,
  NewCommentBox,
};
