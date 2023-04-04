import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { userStore } from "./reduxStore";
import { cartStore } from "./reduxStore";

import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={(userStore, cartStore)}>
      <App />
    </Provider>
  </React.StrictMode>
);
