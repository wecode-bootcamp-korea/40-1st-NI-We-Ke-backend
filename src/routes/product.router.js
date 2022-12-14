const express = require('express');
const searchProductController = require('../controllers/product.controller');
const searchProductRouter = express.Router();


searchProductRouter.get('/product' , searchProductController.searchProductByName);

module.exports = { searchProductRouter };

