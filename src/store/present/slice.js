/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";
import { changeColor } from "../actions";

export const presentSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    addPresent: (state) => {
      state.numberOfPresents = state.numberOfPresents + 1;
    },
    removePresent: (state) => {
      if (state.numberOfPresents > 0) {
        state.numberOfPresents = state.numberOfPresents - 1;
      }
    },
    setPresent: (state, action) => {
      state.numberOfPresents = parseInt(action.payload, 10);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(changeColor, (state, action) => {
      state.colorOfPresents = action.payload;
    });
  },
});

export const { addPresent, removePresent, setPresent, randColor } =
  presentSlice.actions;
