import { createSelector } from "@reduxjs/toolkit";

/** Selects numberOfCakes state. */
export const selectNumberOfPresents = createSelector(
  (state) => state.present.numberOfPresents,
  (numberOfPresents) => numberOfPresents
);

/** Selects colorOfCakes state */
export const selectColorOfPresents = createSelector(
  (state) => state.present.colorOfPresents,
  (colorOfPresents) => colorOfPresents
);
