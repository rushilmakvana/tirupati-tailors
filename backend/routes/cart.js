const express = require("express");
const { doc, updateDoc, getDoc } = require("firebase/firestore");
const { db } = require("../firebase");
const cartRouter = express.Router();

cartRouter.post("/getCart", async (req, res) => {
  const { token } = req.body;
  try {
    const ref = doc(db, "users", token);
    const user = await getDoc(ref);
    // console.log("user = ", user.data());
    if (user.exists()) {
      const cart = user.data().cart;
      res.json({ cart }).status(200);
    }
    // res.json({ cart: [] }).status(200);
  } catch (e) {
    res.json({ error: e.message }).status(500);
  }
});

cartRouter.post("/remove-from-cart", async (req, res) => {
  const { token, cartId } = req.body;
  const ref = doc(db, "users", token);
  const user = await getDoc(ref);
  var cart = user.data().cart;
  cart = cart.filter((e) => e.id !== cartId);
  // console.log("cart  = ", cart);
  await updateDoc(ref, {
    cart: cart,
  });
  res.json({ cart });
});

cartRouter.post("/add-to-cart", async (req, res) => {
  const { token, product } = req.body;

  console.log("called", product);
  const ref = doc(db, "users", token);
  const user = await getDoc(ref);
  var cart = user.data().cart;
  if (cart.length === 0) {
    cart.push({ ...product, quantityPrice: product.price });
  } else {
    var isExist = cart.findIndex((obj) => obj.id === product.id);
    console.log(isExist, "is here");
    if (isExist != -1) {
      var tempObj = cart[isExist];
      if (tempObj.size === product.size) {
        tempObj.quantity++;
        tempObj.quantityPrice = tempObj.price * tempObj.quantity;
        cart[isExist] = tempObj;
      } else {
        cart.push({ ...product, quantityPrice: product.price });
      }
    } else {
      cart.push({ ...product, quantityPrice: product.price });
    }
  }
  await updateDoc(ref, {
    cart: cart,
  });
  res.json({ cart });
});
module.exports = cartRouter;
