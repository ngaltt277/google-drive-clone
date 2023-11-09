import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "../store";
import { SortFieldEnum, SortModeEnum, SortOrderEnum } from "@/enums/sort";

export type Sort = {
  order: string;
  field: string;
  mode: string;
};

const initialState: Sort = {
  order: SortOrderEnum.Ascend,
  field: SortFieldEnum.Name,
  mode: SortModeEnum.Top,
};

export const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSort(state, action) {
      state.order = action.payload.order;
      state.field = action.payload.field;
      state.mode = action.payload.mode;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setSort } = sortSlice.actions;

export const selectSort = (state: AppState) => state.sort;

export default sortSlice.reducer;
