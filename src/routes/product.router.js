const express = require("express");

const productController = require('../controllers/product.controller')

const productRouter = express.Router();

productRouter.get("/category/:categoriesName" , productController.getProductsByCategoryId );
productRouter.get('/detail/:productId' , productController.getDetailByProductId);

module.exports = {productRouter};
