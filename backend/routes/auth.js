const express = require("express");
const {
  addDoc,
  collection,
  doc,
  getDoc,
  query,
  where,
  getDocs,
} = require("firebase/firestore");
const { db } = require("../firebase");
const authRouter = express.Router();

authRouter.post("/verify-token", async (req, res) => {
  //   console.log("first m ", req.body.token);
  const token = req.body.token;
  const ref = doc(db, "users", token);
  const docSnap = await getDoc(ref);
  //   console.log("fefef ", docSnap.data());
  if (docSnap.exists()) {
    return res.json({ data: docSnap.data() }).status(200);
    // console.log("token ", docSnap.data());
  }
  return res.json({ error: "invalid token" }).status(400);
});

authRouter.post("/signup", async (req, res) => {
  //   console.log("data", req.body);
  try {
    const collectionRef = collection(db, "users");
    const docRef = await addDoc(collectionRef, {
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
      cart: [],
      orders: [],
    });

    res
      .json({
        msg: "done",
        token: docRef.id,
        status: 200,
      })
      .status(200);
  } catch (e) {
    res.json({ e }).status(500);
  }
});
authRouter.post("/signin", async (req, res) => {
  console.log("data", req.body);
  try {
    const docref = collection(db, "users");
    const q = query(
      docref,
      where("email", "==", req.body.email)
      //   where("password", "==", req.body.password)
    );
    const q2 = query(
      docref,
      where("email", "==", req.body.email),
      where("password", "==", req.body.password)
    );
    const querySnap = await getDocs(q);
    const querySnap2 = await getDocs(q2);
    // querySnap.forEach((e) => console.log("found ", e.data()));
    if (querySnap.empty) {
      console.log("here");
      return res.json({ msg: "email does not exist" }).status(404);
    }
    if (querySnap2.empty) {
      console.log("here2");
      return res.json({ msg: "incorrect email or password" });
    }
    const userref = doc(db, "users", querySnap2.docs[0].id);
    const user = await getDoc(userref);
    return res
      .json({ token: querySnap2.docs[0].id, status: 200, data: user.data() })
      .status(200);
  } catch (e) {
    res.json({ e }).status(500);
  }
});
module.exports = authRouter;
