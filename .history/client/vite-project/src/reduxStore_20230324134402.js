import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

export const store = configureStore({
    name : "user",
    initialState : { user : null}
 
 
    reducer: {
    user: userReducer,
  },
  
});
