import { configureStore } from "@reduxjs/toolkit";
import { cakeSlice } from "./cake/slice";
import { presentSlice } from "./present/slice";

export default configureStore({
  reducer: {
    cake: cakeSlice.reducer,
    present: presentSlice.reducer,
  },
});
