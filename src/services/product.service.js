const productDao = require('../models/product.dao');

const getProductsByCategoryId  = async (categoryId) => {
    return productDao.getProductsByCategoryId(categoryId);
};

const getDetailByProductId = async(productId) => {
    return productDao.getDetailByProductId(productId);
};

const getProductByName = async(productNames) => {
    return productDao.getProductByName(productNames);
};

const getProductByIconId = async(iconId) => {
    return productDao.getProductByIconId(iconId);
};

const getAllProduct = async(allProduct) => {
    return productDao.getAllProduct(allProduct)
}

module.exports = {getProductsByCategoryId, getProductByName , getProductByIconId ,getAllProduct , getDetailByProductId}

