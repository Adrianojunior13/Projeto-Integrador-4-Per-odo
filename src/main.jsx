import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter> {/* Envolvendo todo o app com BrowserRouter */}
    <App /> {/* App é renderizado dentro do Router */}
  </BrowserRouter>
);
