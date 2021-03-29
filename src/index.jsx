import React from "react";
import ReactDOM from "react-dom";
import App from "./app/components/App";
import "./styles.css";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
