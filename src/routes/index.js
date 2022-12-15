const express = require("express");

const { authRouter } = require("./auth.router");
const { productRouter } = require("./product.router");
const { orderRouter } = require("./order.router");
const { drawRouter } = require("./draw.router");
const { cartRouter } = require("./cart.router");


const routes = express.Router();

routes.use("/auth", authRouter);
routes.use("/products", productRouter);
routes.use("/draws", drawRouter);
routes.use("/carts", cartRouter);
routes.use("/orders", orderRouter);





module.exports = { routes };
