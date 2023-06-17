import { combineReducers } from "@reduxjs/toolkit";
import { dataSlice } from "./data";

export const rootReducer = combineReducers({ issue: dataSlice.reducer });
