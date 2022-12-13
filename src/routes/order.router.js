const express = require('express')

const orderController = require('../controllers/order.controllers')

const orderRouter = express.Router();

orderRouter.post("/orderdetail" , orderController.postOrder);

module.exports = {orderRouter};

