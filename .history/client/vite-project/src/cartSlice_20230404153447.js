import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
      state.total = [state.total + action.payload.price];
    },
  },
});

export const { addToCart } = cartSlice.actions;

export const selectItems = (state) => state.cart.items;

export const selectTotal = (state) =>
  state.cart.items.reduce((total, item) => total + item.price);

export default cartSlice.reducer;
