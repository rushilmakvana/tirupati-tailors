import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../context/cartContext";

import "./carditem.css";
const CardItem = (props) => {
  const ctx = useContext(CartContext);
  const [size, setSize] = useState();
  const navigate = useNavigate();
  const addToCart = () => {
    const token = localStorage.getItem("auth-token");
    if (!token) {
      navigate("/login");
      return;
    }
    if (size) {
      const token = localStorage.getItem("auth-token");
      const prodData = {
        token,
        product: {
          size,
          name: props.name,
          price: props.price,
          imgUrl: props.imgUrl,
          id: props.id,
          quantity: 1,
          type: props.type,
        },
      };
      ctx.addToCart(prodData);
    }
    // }

    // if (size) {
    //   const token = localStorage.getItem("auth-token");
    //   const res = await fetch("http://localhost:3000/add-to-cart", {
    //     method: "post",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       token,
    //       product: {
    //         size,
    //         name: props.name,
    //         price: props.price,
    //         imgUrl: props.imgUrl,
    //         id: props.id,
    //         quantity: 1,
    //         type: props.type,
    //       },
    //     }),
    //   });
    //   const data = await res.json();
    // console.log("ies", size);
    // }
  };
  return (
    <div className="card-item">
      <div className="card-item_title">
        <span>{props.name}</span>
      </div>
      <img src={props.imgUrl} alt="" className="card-item_image" />
      <div className="card-item-select">
        <div className="item-select-label">
          <span>Available sizes</span>
        </div>
        <div className="radio-btns">
          {props.sizes.map((e, i) => (
            <div className="radio" key={i}>
              <input
                type="radio"
                name={props.id}
                // onClick={() => {
                //   console.log("cliced");
                // }}
                onChange={(e) => {
                  setSize(e.target.value);
                }}
                id={e}
                value={e}
              />
              <label htmlFor={e}>{e}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="card-item_price">
        <span>₹ {props.price}</span>
      </div>
      <div className="add-cart" onClick={addToCart}>
        <span>Add to Cart</span>
      </div>
    </div>
  );
};

export default CardItem;
