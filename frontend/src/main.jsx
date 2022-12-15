import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthContextProvider } from "./components/context/AuthContext";
import { CartContextProvider } from "./components/context/cartContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
