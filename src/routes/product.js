const express = require("express");

const searchController = require('../controllers/product.controller')

const searchRouter = express.Router();

searchRouter.get("/category/:categories_name" , searchController.getProductsByCategoryId );

module.exports = searchRouter;