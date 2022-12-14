const productDao = require('../models/product.dao');

const getProductsByCategoryId  = async(categoryId) => {
    return productDao.getProductsByCategoryId(categoryId);
};

const getProductByName = async(productNames) => {
    return productDao.getProductByName(productNames);
};

module.exports = {getProductsByCategoryId, getProductByName }