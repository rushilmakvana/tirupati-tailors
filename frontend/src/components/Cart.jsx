import React, { Fragment } from "react";
import Checkout from "./Checkout";
import Header from "./Header";

const Cart = () => {
  return (
    <Fragment>
      <Header isItem={true} />
      <Checkout />
    </Fragment>
  );
};

export default Cart;
