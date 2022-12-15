const productDao = require('../models/product.dao');

const getProductsByCategoryId  = async(categoryId) => {
    return productDao.getProductsByCategoryId(categoryId);
};

const getDetailByProductId = async(productId) => {
    return productDao.getDetailByProductId(productId);
};

const getProductByName = async(productNames) => {
    return productDao.getProductByName(productNames);
};

module.exports = {getProductsByCategoryId, getProductByName  , getDetailByProductId}
