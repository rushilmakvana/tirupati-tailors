import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Blouse from "./components/Blouse";
import Dresses from "./components/Dresses";
import Kurti from "./components/Kurti";
import Gown from "./components/Gown";
// import { Fragment } from "react";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Orders from "./components/Orders";
// import { CartContextProvider } from "./components/context/cartContext";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/blouses" element={<Blouse />} />
      <Route path="/dresses" element={<Dresses />} />
      <Route path="/kurtis" element={<Kurti />} />
      <Route path="/gowns" element={<Gown />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/orders" element={<Orders />} />
    </Routes>
  );
}

export default App;
