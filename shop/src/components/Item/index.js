import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import dataList from "../../data.js";
import { useState } from "react";
import ItemCard from "./ItemCard.js";
import axios from "axios";

function Item() {
  let [shoes, setShoes] = useState(dataList);
  return (
    <Container>
      <Row style={{ textAlign: "center" }}>
        {shoes.map((item, i) => (
          <ItemCard shoes={item} idx={i} />
        ))}
      </Row>
      <button
        style={{ display: "flex", margin: "0 auto" }}
        onClick={() => {
          axios
            .get("https://codingapple1.github.io/shop/data2.json")
            .then((res) => {
              console.log(res.data);
              console.log(shoes);
              let copy = [...shoes, ...res.data];
              setShoes(copy);
            })
            .catch(() => {
              console.log("데이터 못 가져옴, 실패");
            });
        }}
      >
        더보기
      </button>
    </Container>
  );
}

export default Item;
