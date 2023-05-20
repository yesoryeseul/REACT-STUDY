import Col from "react-bootstrap/Col";
import styled from "styled-components";

const ItemCard = ({ shoes, idx }) => {
  return (
    <Col>
      <Img src={process.env.PUBLIC_URL + `/item${idx}.jpg`} />
      <h4>{shoes.title}</h4>
      <p>{shoes.content}</p>
    </Col>
  );
};

export default ItemCard;

const Img = styled.img`
  height: 300px;
`;
