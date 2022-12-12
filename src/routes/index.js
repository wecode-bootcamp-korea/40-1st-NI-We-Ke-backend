const express = require("express");

const { authRouter } = require("./auth.router");

const { SearchProductRouter } = require('./search-product-name.router');

const routes = express.Router();

routes.use("/auth", authRouter);

routes.use("/search" , SearchProductRouter)

module.exports = { routes };