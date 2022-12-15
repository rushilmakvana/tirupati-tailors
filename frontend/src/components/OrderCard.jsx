import React, { useEffect, useState } from "react";
import "../css/ordercard.css";
import OrderItem from "./OrderItem";
const OrderCard = () => {
  const [Orders, setOrders] = useState();
  const token = localStorage.getItem("auth-token");

  const getOrders = async () => {
    if (!token) {
      return;
    }
    const res = await fetch("http://localhost:3000/getOrder", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token,
      }),
    });
    const data = await res.json();
    setOrders(data.user.orders);
    // console.log(" orders = ", data.user.orders);
  };
  useEffect(() => {
    getOrders();
  }, []);
  if (!token)
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "3rem",
          //   margin: "auto",
        }}
      >
        <h3>Login to see your orders</h3>
      </div>
    );
  if (!Orders) return <h1></h1>;
  if (Orders.length === 0)
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "3rem",
          //   margin: "auto",
        }}
      >
        <h3>No orders yet</h3>
      </div>
    );
  return (
    <div className="all_orders">
      {/* <h2>Your Orders</h2> */}
      <div className="titles">
        <span>OrderId</span>
        <span>Items</span>
        <span>Total</span>
        <span>Status</span>
      </div>
      {/* <OrderItem />
      <OrderItem />
      <OrderItem /> */}
      {Orders.map((e) => {
        return <OrderItem key={e.orderId} {...e} />;
      })}
    </div>
  );
};

export default OrderCard;
