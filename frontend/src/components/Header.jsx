import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "../css/header.css";
import AuthContext from "./context/AuthContext";
import CartContext from "./context/cartContext";

const Header = (props) => {
  const ctx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  // const [showmenu, setShowmenu] = useState(false);
  const [isloggedIn, setIsloggedIn] = useState(false);
  const [name, setName] = useState();
  // console.log("is item ", props.isItem);
  const toggle = () => {
    document.querySelector(".menu").classList.toggle("active");
  };
  const hide = () => {
    document.querySelector(".menu").classList.remove("active");
  };

  window.addEventListener("scroll", () => {
    // console.log("called");
    if (!props.isItem) {
      if (window.scrollY >= 150) {
        document.querySelector(".navbar").style.backgroundColor =
          "rgb(34, 34, 34)";
      } else {
        document.querySelector(".navbar").style.backgroundColor = "";
      }
    }
  });

  // const verify_token = async () => {
  //   const token = localStorage.getItem("auth-token");
  //   if (token) {
  //     const res = await fetch("http://localhost:3000/verify-token", {
  //       method: "post",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ token }),
  //     });
  //     const data = await res.json();
  //     if (data.name) {
  //       // localStorage.setItem("name", data.name);
  //       setIsloggedIn(true);
  //       setName(data.name);
  //     }
  //   }
  //   // console.log("name = ", data);
  // };

  // useEffect(() => {
  //   // verify_token();
  // }, []);

  return (
    <>
      <div className={`navbar ${props.isItem ? "keepBack" : ""}`}>
        <h1 className="title">Tirupati Tailors</h1>
        <ul className="menu">
          <li className="li">
            <NavLink to={"/"} onClick={hide}>
              Home
            </NavLink>
            {/* <a href="#home" onClick={hide}>
              Home
            </a> */}
          </li>
          <li className="li">
            <NavLink to={"/gowns"} onClick={hide}>
              Gown
            </NavLink>
            {/* <a href="#home" onClick={hide}>
              Home
            </a> */}
          </li>
          <li className="li">
            <NavLink to={"/kurtis"} onClick={hide}>
              Kurti
            </NavLink>
            {/* <a href="#design" onClick={hide}>
              Designs
            </a> */}
          </li>
          <li className="li">
            <NavLink to={"/dresses"} onClick={hide}>
              Dress
            </NavLink>
            {/* <a href="#contact" onClick={hide}>
              Contact us
            </a> */}
          </li>
          <li className="li">
            <NavLink to={"/blouses"} onClick={hide}>
              Blouse
            </NavLink>
            {/* <a href="#contact" onClick={hide}>
              Contact us
            </a> */}
          </li>
          <li className="li">
            <NavLink to={"/orders"} onClick={hide}>
              Orders
            </NavLink>
            {/* <a href="#contact" onClick={hide}>
              Contact us
            </a> */}
          </li>

          <div className="cls" onClick={hide}>
            <i className="fas fa-times fa-2x"></i>
          </div>
        </ul>
        <div className="tog" onClick={toggle}>
          <div className="hamb"></div>
          <div className="hamb"></div>
          <div className="hamb"></div>
        </div>
        <div className="login-cart">
          {!authCtx.username && (
            <NavLink to={"/login"} style={{ textDecoration: "none" }}>
              <div className="login-btn">
                <span>Login</span>
              </div>
            </NavLink>
          )}
          {authCtx.username && (
            <div className="logged-in">
              <i className="fa-solid fa-user"></i>
              <span>{authCtx.username.name}</span>
            </div>
          )}
          <NavLink
            to={"/cart"}
            style={{ textDecoration: "none", color: "#f3f3f3" }}
          >
            <div className="cart-btn">
              <i className="fa-solid fa-cart-shopping"></i>

              {ctx.cart.length > 0 && (
                <div className="badge">
                  <span>{ctx.cart.length}</span>
                </div>
              )}
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
