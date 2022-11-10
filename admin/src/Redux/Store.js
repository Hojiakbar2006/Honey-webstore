import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reProduct } from "./Product";
import { reMoreSeen } from "./MoreSeen";
import { reSearch } from "./Search";
import { reOrder } from './Order';
import { reGuest } from "./Guest";
import { reLoading } from "./Loading";

const reducer = combineReducers({
  loading:reLoading,
  product: reProduct,
  moreSeen: reMoreSeen,
  search: reSearch,
  order: reOrder,
  guest: reGuest
});

export const Store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});
