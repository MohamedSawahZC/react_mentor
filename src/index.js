import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.js";
import { UseContextProvider } from "./components/UseContextExample";
// ========== Project Render in Root HTML ===================
//Wrap All components with provider
ReactDOM.render(
  <UseContextProvider>
    <App />
  </UseContextProvider>,
  document.getElementById("root")
);
