const express = require("express");

const { authRouter } = require("./auth.router");

const { searchProductRouter } = require('./search-product-name.router');

const routes = express.Router();

routes.use("/auth", authRouter);

routes.use("/search" , searchProductRouter);

module.exports = { routes };