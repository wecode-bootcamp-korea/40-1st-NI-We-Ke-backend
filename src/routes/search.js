const express = require("express");

const searchController = require('../controllers/search.controller')

const searchRouter = express.Router();

searchRouter.get("/gender/:categories_name" , searchController.searcH);

module.exports = searchRouter;