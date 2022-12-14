const orderDao = require('../models/order.dao');
const crypto = require('crypto')

//crypto 는 node.js 자체 모듈이다//

const createOrder = async(userId, price ,quantity) =>{
    const orderNumber = crypto.randomBytes(20).toString('hex');

    return await orderDao.createOrder(userId, orderNumber , price ,quantity)
}

module.exports = { createOrder };