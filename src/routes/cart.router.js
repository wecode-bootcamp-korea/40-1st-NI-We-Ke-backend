const express = require("express");

const { tokenRequired } = require("../utils/auth");
const cartController = require("../controllers/cart.controller");
const { token } = require("morgan");

const cartRouter = express.Router();

cartRouter.post("", tokenRequired, cartController.createCart);
cartRouter.get("", tokenRequired, cartController.getCartsByUserId);
//cartRouter.delete("", tokenRequired, cartController.deleteCartsAll);
cartRouter.delete("/:id", tokenRequired, cartController.deleteCartsById);

//cartRouter.patch("", tokenRequired, cartController.changeCart);

module.exports = { cartRouter };
