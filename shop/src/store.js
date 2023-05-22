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
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
});

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    cart: cart.reducer,
  },
});
