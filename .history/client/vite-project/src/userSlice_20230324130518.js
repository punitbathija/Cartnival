import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  intialState,

  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },

    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
