const express = require('express');
const searchProductController = require('../controllers/search-product-name.controller');
const searchProductRouter = express.Router();


searchProductRouter.get('/product' , searchProductController.searchProductByName);

module.exports = { searchProductRouter };

