import React, { useContext, useEffect, useRef, useState } from "react";
import CartItem from "./CartItem";
import Input from "./Input";
import "../css/loginform.css";
import "../css/checkout.css";
import CartContext from "./context/cartContext";
import { useNavigate } from "react-router-dom";
const Checkout = () => {
  const ctx = useContext(CartContext);
  const [cart, setCart] = useState(ctx.cart);
  const area = useRef();
  const pincode = useRef();
  const street = useRef();
  const city = useRef();
  const navigate = useNavigate();
  // console.log("total = ", ctx.totalPrice);
  const confirmOrder = async () => {
    if (street.current.value.trim().length === 0) {
      street.current.focus();
      return;
    }
    if (area.current.value.trim().length === 0) {
      area.current.focus();
      return;
    }
    if (city.current.value.trim().length === 0) {
      city.current.focus();
      return;
    }
    if (
      pincode.current.value.trim().length === 0 ||
      +pincode.current.value.trim() === "NaN"
    ) {
      pincode.current.focus();
      return;
    }
    const token = localStorage.getItem("auth-token");
    const date = new Date();
    try {
      // console.log("data = ", date.toString());
      const res = await fetch("http://localhost:3000/addOrder", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: token,
          orderCreated: date.toString(),
          items: ctx.cart,
          amount: ctx.totalPrice,
          confirm: true,
          address: `${street.current.value}, ${area.current.value}, ${city.current.value}, ${pincode.current.value}`,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        console.log("order = ", data);
        ctx.deleteCart();
        navigate("/orders");
      }
    } catch (e) {
      console.log("error = ", e.toString());
    }
  };

  // useEffect(() => {

  // ctx.

  // }, [])

  if (ctx.cart.length === 0) {
    return (
      <div
        style={{
          width: "100%",
          marginTop: "3rem",
          textAlign: "center",
        }}
      >
        <h3>Your cart is empty</h3>
      </div>
    );
  }
  return (
    <div className="checkout_card">
      <div className="items-section">
        <div className="check-out_title">
          <span>Shopping Cart</span>
          <span>{ctx.cart.length} items</span>
        </div>
        <div className="cart-details">
          {ctx.cart.map((e) => {
            return <CartItem key={e.id} {...e} setCart={setCart} />;
          })}
        </div>
      </div>
      <div className="details-section">
        <div className="deatils-title">
          <span>Summary</span>
        </div>
        <div className="address">
          <Input
            placeholder="street, block no."
            label="Street"
            type="text"
            ref={street}
          />
          <Input placeholder="Area" label="Area" type="text" ref={area} />
          <Input placeholder="City" label="City" type="text" ref={city} />
          <Input
            placeholder="Pincode"
            label="Pincode"
            type="text"
            ref={pincode}
          />
        </div>
        <div className="ship_charge">
          <span>Total price</span>
          <span>₹{ctx.totalPrice} </span>
        </div>
        <div className="form__btn" onClick={confirmOrder}>
          <span>Order now</span>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
