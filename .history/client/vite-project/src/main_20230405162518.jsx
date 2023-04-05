import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { store } from "./reduxStore";

import { Provider } from "react-redux";
import { Elements } from "@stripe/react-stripe-js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Elements>
        <App />
      </Elements>
    </Provider>
  </React.StrictMode>
);
