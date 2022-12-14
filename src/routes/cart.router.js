const express = require("express");

const { tokenRequired } = require("../utils/auth");
const cartController = require("../controllers/cart.controller");

const cartRouter = express.Router();

cartRouter.post("", tokenRequired, cartController.createCart);
cartRouter.get("", tokenRequired, cartController.getCartsByUserId);
cartRouter.delete("/:cartId", tokenRequired, cartController.deleteCartsById);

module.exports = { cartRouter };
