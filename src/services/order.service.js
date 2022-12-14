const orderDao = require('../models/order.dao');
const crypto = require('crypto')


const createOrder = async(userId, price ,quantity) =>{
    const orderNumber = crypto.randomBytes(20).toString('hex');

    return await orderDao.createOrder(userId, orderNumber , price ,quantity)
}

module.exports = { createOrder };