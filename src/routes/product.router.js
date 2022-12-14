const express = require("express");

const productController = require('../controllers/product.controller')

const productRouter = express.Router();
const searchProductRouter =express.Router();

productRouter.get("/category/:categories_name" , productController.getProductsByCategoryId );

module.exports = {productRouter , searchProductRouter};
