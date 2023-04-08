import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { store } from "./reduxStore";
import { Provider, useSelector } from "react-redux";
import { selectUser } from "./userSlice";
const user = useSelector(selectUser);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
