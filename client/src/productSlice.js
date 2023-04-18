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

export const { selectProduct } = productSlice.actions;

export default productSlice.reducer;
