import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    signin: (state, action) => {
      state.user = action.payload;
    },

    signout: (state) => {
      state.user = null;
    },
  },
});

const userSession = JSON.parse(localStorage.getItem("userSession"));

if (userSession) {
  setUser({ user: userSession.user });
}

export const { signin, signout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
