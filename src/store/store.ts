import {
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { sortSlice } from "./sort/sortSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const rootReducer = combineReducers({
  [sortSlice.name]: sortSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const setupStore = () =>
  configureStore({
    reducer: persistedReducer,
  });

export type AppStore = ReturnType<typeof setupStore>;
export type AppState = ReturnType<AppStore["getState"]>;

export const persistor = persistStore(setupStore());
export const store = setupStore();
