import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import dataApi from "../apis/data";

export const getData = createAsyncThunk(
  "issue/getData",
  async ({ page, perPage, sort }) => {
    // const res = await dataApi.getRepoData(params) / {params}
    const res = await dataApi.getRepoData(page, perPage, sort);
    console.log("res", res);
    return res.data;
  }
);

const initialState = {
  issues: [],
  getDataState: {
    loading: false,
    done: false,
    arr: null,
  },
};

export const dataSlice = createSlice({
  name: "issue",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state) => {
      state.getDataState.loading = true;
      state.getDataState.done = false;
      state.getDataState.arr = null;
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      state.issues = action.payload;
      state.getDataState.loading = false;
      state.getDataState.done = true;
      state.getDataState.arr = null;
    });
    builder.addCase(getData.rejected, (state, action) => {
      state.getDataState.loading = false;
      state.getDataState.done = true;
      state.getDataState.arr = action.payload;
    });
  },
});
