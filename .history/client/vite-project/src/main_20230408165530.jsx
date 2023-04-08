import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { store } from "./reduxStore";
import { Provider, useSelector } from "react-redux";
import { selectUser } from "./userSlice";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      const user = useSelector(selectUser);
    </Provider>
  </React.StrictMode>
);
