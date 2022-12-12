const express = require('express');
const SearchProductController = require('../controllers/search-product-name.controller');
const SearchProductRouter = express.Router();
SearchProductRouter.get = ('/product/:Product_name' ,SearchProductController.searchProducT );
module.exports = SearchProductRouter;