const express = require('express');
const SearchProductController = require('../controllers/search-product-name.controller');
const SearchProductRouter = express.Router();


SearchProductRouter.get = ('/product' ,SearchProductController.searchProducT);

module.exports = { SearchProductRouter };