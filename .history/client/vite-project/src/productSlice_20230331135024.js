import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,

  reducers: {
    signin: (state, action) => {
      state.product = action.payload;
    },

    signout: (state) => {
      state.product = null;
    },
  },
});

export const { signin, signout } = productSlice.actions;

export const selectproduct = (state) => state.product.product;

export default productSlice.reducer;
