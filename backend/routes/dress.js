const express = require("express");
const getData = require("../common/getData");
const dressRouter = express.Router();

dressRouter.get("/getDresses", async (req, res) => {
  const dressData = await getData("dress");
  res.status(200).json({ data: dressData });
});

module.exports = dressRouter;
