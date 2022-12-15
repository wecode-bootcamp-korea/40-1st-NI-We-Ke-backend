const express = require("express");

const drawController = require("../controllers/draw.controller");

const drawRouter = express.Router();

drawRouter.get("/products", drawController.getProductsInDraw);

module.exports = { drawRouter };
