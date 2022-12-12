const express = require("express");

const { authRouter } = require("./auth.router");
const searchRouter = require("./product");



const routes = express.Router();

routes.use("/auth", authRouter);
routes.use('/search', searchRouter)

module.exports = { routes };