import React from "react";
import "../css/ordercard.css";
const OrderItem = (props) => {
  // console.log("prosp =", props);
  return (
    <div className="order">
      <div className="order-details">
        <span>{props.orderId}</span>
      </div>
      <ul className="order-items">
        {/* <li>Dress</li>
        <li>Dress</li>
        <li>Dress</li> */}
        {props.items.map((e) => (
          <li key={e.id}>{`${e.name} (${e.size})  x${e.quantity}`}</li>
        ))}
      </ul>
      <div className="order-total">
        <span>₹{props.amount}</span>
      </div>
      <div className="order-status">
        {/* <span>Status</span> */}
        <span>{props.confirm ? "approved" : "cancled"}</span>
      </div>
    </div>
  );
};

export default OrderItem;
