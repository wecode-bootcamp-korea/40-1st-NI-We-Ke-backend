const express = require("express");

const productController = require('../controllers/product.controller')

const productRouter = express.Router();


productRouter.get("/category/:categoryId" , productController.getProductsByCategoryId );
productRouter.get('/detail/:productId' , productController.getDetailByProductId);
productRouter.get('/product' , productController.getProductByName);
productRouter.get('/icon/:iconId' , productController.getProductByIconId )
productRouter.get('/all' ,productController.getAllProduct )

module.exports = {productRouter};