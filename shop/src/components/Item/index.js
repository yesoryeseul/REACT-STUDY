import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import dataList from "../../data.js";
import { useState } from "react";
import ItemCard from "./ItemCard.js";

function Item() {
  let [shoes] = useState(dataList);
  return (
    <Container>
      <Row style={{ textAlign: "center" }}>
        {shoes.map((item, i) => (
          <ItemCard shoes={item} i={i + 1} />
        ))}
      </Row>
    </Container>
  );
}

export default Item;
