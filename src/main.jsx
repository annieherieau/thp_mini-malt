import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./app/App.jsx";
import "./main.scss";

import store from "./app/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/thp_mini-malt">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
