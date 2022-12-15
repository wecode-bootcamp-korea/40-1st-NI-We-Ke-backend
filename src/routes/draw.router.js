const express = require("express");

const drawController = require("../controllers/draw.controller");

const drawRouter = express.Router();

drawRouter.get("", drawController.getDrawByProductDrawColumn);

module.exports = { drawRouter };

//draw = 1 인 상품들을 찾아줘
