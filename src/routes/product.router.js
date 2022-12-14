const express = require("express");

const productController = require('../controllers/product.controller')

const productRouter = express.Router();

productRouter.get("/category/:categories_name" , productController.getProductsByCategoryId );
productRouter.get('/product' , productController.getProductByName);

module.exports = {productRouter};