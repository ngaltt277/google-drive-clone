import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { sortSlice } from "./sort/sortSlice";
import { createWrapper } from "next-redux-wrapper";

const store = () => configureStore({
  reducer: {
    [sortSlice.name]: sortSlice.reducer,
  },
  devTools: true,
});

export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(store);
