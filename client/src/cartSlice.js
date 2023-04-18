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
      state.total = [Number(state.total) + Number(action.payload.price)];
    },
    removeFromCart: (state, action) => {
      const id = action.payload.id;
      const itemToRemove = state.items.find((item) => item.id === id);
      state.items = state.items.filter((item) => item.id !== id);
      state.total -= itemToRemove.price;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectItems = (state) => state.cart.items;
export const selectTotal = (state) => state.cart.total;

export default cartSlice.reducer;
