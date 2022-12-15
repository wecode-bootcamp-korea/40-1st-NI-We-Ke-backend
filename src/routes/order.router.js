const express = require('express')

const orderController = require('../controllers/order.controllers');
const { tokenRequired } = require('../utils/auth');
const orderRouter = express.Router();

orderRouter.post("" ,tokenRequired, orderController.createOrder);

module.exports = {orderRouter};

