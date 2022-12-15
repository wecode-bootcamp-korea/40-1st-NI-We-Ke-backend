const productDao = require('../models/product.dao');

const getProductsByCategoryId  = async(categoryId) => {
    return productDao.getProductsByCategoryId(categoryId);
};

const getDetailByProductId = async(productId) => {
    return productDao.getDetailByProductId(productId);
};



module.exports = {getProductsByCategoryId, getDetailByProductId }

