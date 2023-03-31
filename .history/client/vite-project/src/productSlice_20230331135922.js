import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState: {
    selectedProductId: null,
  },

  reducers: {
    selectProduct: (state, action) => {
      state.selectedProductId = action.payload;
    },
  },
});

export const { signin, signout } = productSlice.actions;

export const selectproduct = (state) => state.product.product;

export default productSlice.reducer;
