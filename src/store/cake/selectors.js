import { createSelector } from "@reduxjs/toolkit";

/** Selects numberOfCakes state. */
export const selectNumberOfCakes = createSelector(
  (state) => state.cake.numberOfCakes,
  (numberOfCakes) => numberOfCakes
);

/** Selects colorOfCakes state */
export const selectColorOfCakes = createSelector(
  (state) => state.cake.colorOfCakes,
  (colorOfCakes) => colorOfCakes
);
