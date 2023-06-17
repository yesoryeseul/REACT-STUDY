import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCount, deleteItem, minusCount } from "../../store";

const Cart = () => {
  // const user = useSelector((state) => state.user);
  // console.log(user);
  // console.log(state.stock);

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(cart);
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>가격</th>
            <th>변경하기</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td>{cart[index].id}</td>
              <td>{cart[index].name}</td>
              <td>{cart[index].count}</td>
              <td>{`${cart[index].price}.0$`}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(addCount(cart[index].id));
                  }}
                >
                  +
                </button>
                <button
                  onClick={() => {
                    dispatch(minusCount(cart[index].id));
                  }}
                >
                  -
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    dispatch(deleteItem(cart[index].id));
                  }}
                >
                  x
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;
