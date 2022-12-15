const express = require("express");
const { doc, getDoc, updateDoc } = require("firebase/firestore");
const { db } = require("../firebase");
const orderRouter = express.Router();
const { v4 } = require("uuid");
orderRouter.post("/addOrder", async (req, res) => {
  console.log("called addorder");
  const { userId, orderCreated, items, amount, confirm, address } = req.body;
  const orderId = v4();
  const userRef = doc(db, "users", userId);
  const user = await getDoc(userRef);
  const orders = user.data().orders;
  orders.push({ orderCreated, items, amount, confirm, address, orderId });
  await updateDoc(userRef, {
    orders: orders,
  });
  const cartRef = doc(db, "users", userId);
  await updateDoc(cartRef, {
    cart: [],
  });
  res.json({ orders });
});

orderRouter.post("/getOrder", async (req, res) => {
  console.log("called getorder");
  const { token } = req.body;
  const userRef = doc(db, "users", token);
  const user = await getDoc(userRef);
  // console.log("user = ", user.data());
  res.json({ msg: "ok", user: user.data() }).status(200);
});

module.exports = orderRouter;
