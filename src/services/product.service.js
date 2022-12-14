const productDao = require('../models/product.dao');

const getProductsByCategoryId  = async(categoryId) => {
    return productDao.getProductsByCategoryId(categoryId);
};



module.exports = {getProductsByCategoryId }

module.exports = {getProductsByCategoryId }