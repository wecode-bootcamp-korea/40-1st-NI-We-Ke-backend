const express = require("express");

const { authRouter } = require("./auth.router");
const  {productRouter} = require("./product");
const {detailRouter} = require('./detail.routes');

const routes = express.Router();

routes.use("/auth", authRouter);
routes.use('/products', productRouter);
routes.use('/products' ,detailRouter);


module.exports = { routes };