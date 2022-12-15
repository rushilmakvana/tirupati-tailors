const express = require("express");
const getData = require("../common/getData");

const kurtiRouter = express.Router();

kurtiRouter.get("/getKurtis", async (re, res) => {
  const kurtiData = await getData("kurti");
  res.json({ data: kurtiData }).status(200);
});

module.exports = kurtiRouter;
