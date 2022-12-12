const searchDao = require('../models/product.dao');

const getProductsByCategoryId  = async(name) => {
    const user = await searchDao.getProductsByCategoryId(name);

    if(!user) {
        const err = new Error('Error');
        err.statusCode = 400;
        throw err;
    }
    return user
};

module.exports = {getProductsByCategoryId }