import { configureStore, createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: "kim",
});

const stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
});

// const data = [
//   { id: 0, name: "White and Black", count: 2 },
//   { id: 2, name: "Grey Yordan", count: 1 },
// ];

const cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 1, price: 5 },
    { id: 2, name: "Grey Yordan", count: 1, price: 3 },
  ],
  reducers: {
    addCount(state, action) {
      const index = state.findIndex((item) => item.id === action.payload);
      state[index].count++;
      state[index].price +=
        state[index].count === 0 ? 0 : state[index].id === 0 ? 5 : 3; // 이거는 너무 하드코딩이다
    },
    minusCount(state, action) {
      const index = state.findIndex((item) => item.id === action.payload);
      // count 가 0 이라면 음수값이 나오지 않게 0을 유지
      if (state[index].count === 0) return state;

      // 아니라면 -- 로직 적용
      state[index].count--;
      state[index].price -= state[index].id === 0 ? 5 : 3;
      // 이거 initialState 많아지면 어떻게 할래?
    },
    addItem(state, action) {
      state.push(action.payload);
    },
    deleteItem(state, action) {
      // return state.filter((item) => item.id !== action.payload);
      const index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addCount, minusCount, addItem, deleteItem } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    cart: cart.reducer,
  },
});
