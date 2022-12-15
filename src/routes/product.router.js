const express = require("express");

const productController = require('../controllers/product.controller')

const productRouter = express.Router();

productRouter.get("/category/:categories_name" , productController.getProductsByCategoryId );
productRouter.get('/product' , productController.getProductByName);
productRouter.get('/icon/:icon_name' , productController.getProductByIconId )
productRouter.get('/all' ,productController.getAllProduct )

module.exports = {productRouter};