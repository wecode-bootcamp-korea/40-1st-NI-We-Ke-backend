const express = require("express");

const { authRouter } = require("./auth.router");
const { wishlistRouter } = require("./wishlist.router");
const { cartRouter } = require("./cart.router");
const { productRouter } = require("./product.router");
const { orderRouter } = require("./order.router");
const { drawRouter } = require("./draw.router");

const routes = express.Router();

routes.use("/auth", authRouter);
routes.use("/products", productRouter);
routes.use("/orders", orderRouter);
routes.use("/wishlists", wishlistRouter);
routes.use("/draws", drawRouter);
routes.use("/carts", cartRouter);

module.exports = { routes };
