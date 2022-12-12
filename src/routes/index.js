const express = require("express");

const { authRouter } = require("./auth.router");
const { cartRouter } = require("./cart.router");

const routes = express.Router();

routes.use("/auth", authRouter);
routes.use("/cart", cartRouter);
//엔트포인트url을 "/cart"로 연결해서 cartRouter를 발동시키는데
//이cartRouter는 cart.router



module.exports = { routes };

