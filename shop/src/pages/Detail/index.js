import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = ({ shoes }) => {
  // 2초 뒤에 div className="alert alert-warning" 안 보이게

  // 1. 스위치 만들기
  const [time, setTime] = useState(true);
  useEffect(() => {
    let timer = setTimeout(() => {
      setTime(false);
    }, 2000);

    return () => {
      clearTimeout(timer); // 기존 타이머 제거, 버그 방지
      // 기존 데이터 요청은 제거해주세요~
    };
  }, []);

  // input에 숫자가 아닌 다른 문자 입력한 경우 alert("숫자가 아닙니다.") 띄우기
  const [number, setNumber] = useState("");
  useEffect(() => {
    if (isNaN(number)) alert("숫자를 입력하세요!");
  }, [number]);

  const handleInput = (e) => {
    setNumber(e.target.value);
  };

  let { id } = useParams();
  const [test] = useState(shoes.find((value) => value.id == id));
  console.log(test);

  console.log(id);
  return (
    <div className="container">
      {time && <div className="alert alert-warning">2초 이내 구매 시 할인</div>}
      <div className="row">
        <div className="col-md-6">
          <img src={process.env.PUBLIC_URL + `/item${id}.jpg`} width="100%" />
        </div>
        <div className="col-md-6 columnFlexCenter">
          <input onChange={handleInput} />
          <h4 className="pt-5">{test.title}</h4>
          <p>{test.content}</p>
          <p>{test.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
