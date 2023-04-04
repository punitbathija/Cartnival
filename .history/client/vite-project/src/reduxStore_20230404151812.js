import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";

export const userStore = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export const productStore = configureStore({
  reducer: {
    product: productReducer,
  },
});

export const cartStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
