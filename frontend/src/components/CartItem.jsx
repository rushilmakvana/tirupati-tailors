import React, { useContext } from "react";
import "../css/cartitem.css";
import CartContext from "./context/cartContext";
const CartItem = (props) => {
  // console.log("props = ", props);
  const ctx = useContext(CartContext);
  const removeFromCart = (cartId) => {
    ctx.removeFromCart(cartId);
  };
  return (
    <div className="cart_item">
      <div className="cart-item_img">
        <img src={props.imgUrl} alt="" />
      </div>
      <div className="product_details">
        <div className="product_title">
          <span>{props.type}</span>
        </div>
        <div className="product_name">
          <span>{`${props.name} (${props.size})`}</span>
        </div>
      </div>
      <div className="quantity">
        <span>{props.quantity}</span>
      </div>
      <div className="price">
        <span>₹{props.quantityPrice}</span>
      </div>
      <div className="close_btn" onClick={() => removeFromCart(props.id)}>
        <i className="fa-solid fa-xmark"></i>
      </div>
    </div>
  );
};

export default CartItem;
