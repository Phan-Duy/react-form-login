import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

const productState = (state: RootState) => state;

const paginationSelector = createSelector(productState, (state) => {
  return {
    totalRows: state.products.data?.length || 1,
    page: state.counter,
  };
});

export { paginationSelector };