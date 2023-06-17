import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { Context1 } from "../../App.js";
import { addItem } from "../../store.js";
import { useDispatch, useSelector } from "react-redux";

const Detail = ({ shoes }) => {
  let { stock } = useContext(Context1);
  const [fadeDetail, setFadeDetail] = useState("");

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    // 탭이 변할 때 마다 end를 부착하기
    // fadeDetail라는 state를 end로 바꿔주세요
    let timer;
    setTimeout(() => {
      timer = setFadeDetail("end");
    }, 100);

    // 얘가 먼저 실행된다
    return () => {
      clearTimeout(timer);
      setFadeDetail("");
    };
  }, []);

  let [tab, setTab] = useState(0);
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
    <div className={"start " + fadeDetail}>
      {stock}
      <div className="container">
        {time && (
          <div className="alert alert-warning">2초 이내 구매 시 할인</div>
        )}
        <div className="row">
          <div className="col-md-6">
            <img src={process.env.PUBLIC_URL + `/item${id}.jpg`} width="100%" />
          </div>
          <div className="col-md-6 columnFlexCenter">
            <input onChange={handleInput} />
            <h4 className="pt-5">{test.title}</h4>
            <p>{test.content}</p>
            <p>{test.price}</p>
            <button
              className="btn btn-danger"
              onClick={() => {
                dispatch(addItem({ id: 1, name: "White Band", count: 1 }));
              }}
            >
              주문하기
            </button>
          </div>
        </div>
        <Nav variant="tabs" defaultActiveKey="link1">
          <Nav.Item>
            <Nav.Link eventKey="link0" onClick={() => setTab(0)}>
              버튼0
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link1" onClick={() => setTab(1)}>
              버튼1
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link2" onClick={() => setTab(2)}>
              버튼2
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Tabcontent tab={tab} />
      </div>
    </div>
  );
};

function Tabcontent({ tab }) {
  let { stock } = useContext(Context1);
  // if (tab == 0) {
  //   return <div>내용0</div>;
  // } else if (tab == 1) {
  //   return <div>내용1</div>;
  // } else if (tab == 2) {
  //   return <div>내용2</div>;
  // }
  const [fade, setFade] = useState("");
  useEffect(() => {
    // 탭이 변할 때 마다 end를 부착하기
    // fade라는 state를 end로 바꿔주세요
    let timer;
    setTimeout(() => {
      timer = setFade("end");
    }, 100);

    // 얘가 먼저 실행된다
    return () => {
      clearTimeout(timer);
      setFade("");
    };
  }, [tab]);
  return (
    <div className={`start ${fade}`}>
      {[<div>{stock}</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
  );
}

export default Detail;
