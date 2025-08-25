import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import OportunizaPage from "./OportunizaPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter> {/* Usando BrowserRouter para envolver as rotas */}
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/oportuniza" element={<OportunizaPage />} /> {/* Nova rota */}
    </Routes>
  </BrowserRouter>
);
