const express = require("express");

const { authRouter } = require("./auth.router");
const { cartRouter } = require("./cart.router");
const { productRouter } = require("./product.router");
const { orderRouter } = require("./order.router");

const routes = express.Router();

routes.use("/auth", authRouter);
routes.use("/products", productRouter);
routes.use("/cart", cartRouter);
routes.use("/orders", orderRouter);

module.exports = { routes };
