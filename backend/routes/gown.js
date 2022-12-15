const express = require("express");
const getData = require("../common/getData");

const gownRouter = express.Router();

gownRouter.get("/getGowns", async (re, res) => {
  const gownData = await getData("gown");
  res.json({ data: gownData }).status(200);
});

module.exports = gownRouter;
