import React, { Fragment } from "react";
import Header from "./Header";
import OrderCard from "./OrderCard";
// import OrderCart from "./OrderCart";

const Orders = () => {
  return (
    <Fragment>
      <Header isItem={true} />
      <OrderCard />
    </Fragment>
  );
};

export default Orders;
