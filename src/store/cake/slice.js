/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";
import { changeColor } from "../actions";

export const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    addCake: (state) => {
      state.numberOfCakes = state.numberOfCakes + 1;
    },
    removeCake: (state) => {
      if (state.numberOfCakes > 0) {
        state.numberOfCakes = state.numberOfCakes - 1;
      }
    },
    setCake: (state, action) => {
      state.numberOfCakes = parseInt(action.payload, 10);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(changeColor, (state, action) => {
      state.colorOfCakes = action.payload;
    });
  },
});

export const { addCake, removeCake, setCake, randColor } = cakeSlice.actions;
