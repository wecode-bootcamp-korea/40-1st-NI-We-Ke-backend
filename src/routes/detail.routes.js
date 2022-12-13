const express = require("express")

const detailController = require('../controllers/detail.controller');

const detailRouter = express.Router();

detailRouter.get('/detail/:product_ID' , detailController.getDetailByProductId);

module.exports = {detailRouter};