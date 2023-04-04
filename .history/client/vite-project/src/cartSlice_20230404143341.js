import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions;

export const selectItems = (state) => state.cart.items;

export const selectTotal = (state) =>
  state.cart.items.reduce((total, item) => total + item.price * 70, 0);

export default cartSlice.reducer;
