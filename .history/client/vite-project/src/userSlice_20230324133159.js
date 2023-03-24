import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  intialState,

  reducers: {
    signin: (state, action) => {
      state.user = action.payload;
    },

    signout: (state) => {
      state.user = null;
    },
  },
});

export const { signin, signout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
