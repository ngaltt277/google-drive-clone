import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "../store";

export type Sort = {
  order: string;
  field: string;
};

const initialState: Sort = {
  order: "ascend",
  field: "name",
};

export const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSort(state, action) {
      state.order = action.payload.order;
      state.field = action.payload.field;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.order,
        ...action.payload.field,
      };
    },
  },
});

export const { setSort } = sortSlice.actions;

export const selectSort  = (state: AppState) => state.sort;

export default sortSlice.reducer;

