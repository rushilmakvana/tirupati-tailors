const express = require("express");
const getData = require("../common/getData");

const blouseRouter = express.Router();

blouseRouter.get("/getBlouses", async (req, res) => {
  const blouseData = await getData("blouse");
  res.json({ data: blouseData }).status(200);
});
module.exports = blouseRouter;
