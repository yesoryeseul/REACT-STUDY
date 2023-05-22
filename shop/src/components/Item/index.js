import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import dataList from "../../data.js";
import { useState } from "react";
import ItemCard from "./ItemCard.js";
import axios from "axios";

function Item() {
  let [shoes, setShoes] = useState(dataList);
  const [isLoading, setIsLoading] = useState(false);
  const [showLoadingScreen, setShowLoadingScreen] = useState(false);

  return (
    <Container>
      <Row style={{ textAlign: "center" }}>
        {shoes.map((item, i) => (
          <ItemCard shoes={item} idx={i} />
        ))}
      </Row>
      {showLoadingScreen && <div>Loading Screen...</div>}
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <button
          style={{ display: "flex", margin: "0 auto" }}
          onClick={() => {
            // 더보기 클릭 후 로딩중 UI 띄우기~
            setIsLoading(true);
            setShowLoadingScreen(true); // 로딩화면 표시
            axios
              .get("https://codingapple1.github.io/shop/data2.json")
              .then((res) => {
                console.log(res.data);
                console.log(shoes);
                let copy = [...shoes, ...res.data];
                setShoes(copy);
                // 요청 성공시 로딩중 UI 숨기기~
                // setIsLoading(false);
              })
              .catch(() => {
                // 실패시 로딩중 UI 숨기기~
                // setIsLoading(false);
                console.log("데이터 못 가져옴, 실패");
              })
              .finally(() => {
                setIsLoading(false);

                // 2초 후 로딩화면 숨김
                setTimeout(() => {
                  setShowLoadingScreen(false);
                }, 2000);
              });
          }}
        >
          더보기
        </button>
      )}
    </Container>
  );
}

export default Item;
