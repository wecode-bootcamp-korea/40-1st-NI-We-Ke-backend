const express = require("express");

const productController = require('../controllers/product.controller')

const productRouter = express.Router();


productRouter.get("/category/:categoryName" , productController.getProductsByCategoryId );
productRouter.get('/detail/:productId' , productController.getDetailByProductId);
productRouter.get('/product' , productController.getProductByName);
productRouter.get('/icon/:iconName' , productController.getProductByIconId )
productRouter.get('/all' ,productController.getAllProduct )

module.exports = {productRouter};