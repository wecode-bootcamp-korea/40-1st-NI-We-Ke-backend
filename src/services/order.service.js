const orderDao = require('../models/order.dao');

const postOrder = async(user_id, order_number , status_id , price ,quantity) =>{
    const order = await orderDao.createOrder(user_id, order_number , status_id , price ,quantity);

    // if(order) {
    //     const err = new Error("duplicated order");
    //     err.statusCode = 400;
    //     throw err;
    // }
}

module.exports = { postOrder };