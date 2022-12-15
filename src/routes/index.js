const express = require("express");

const { authRouter } = require("./auth.router");
const {productRouter} = require("./product.router");
const {orderRouter} = require('./order.router');


const routes = express.Router();

routes.use("/auth", authRouter);
routes.use('/products', productRouter);
routes.use('/orders' , orderRouter);




module.exports = { routes };