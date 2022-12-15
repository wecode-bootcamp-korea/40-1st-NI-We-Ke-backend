const express = require("express");

const drawController = require("../controllers/draw.controller");

const drawRouter = express.Router();

drawRouter.get("/:id", drawController.getDrawByProductDrawColumn);

module.exports = { drawRouter };
