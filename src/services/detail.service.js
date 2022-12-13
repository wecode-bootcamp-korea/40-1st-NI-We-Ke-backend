const detailDao = require('../models/detail.dao');

const getDetailByProductId = async(productId) => {
        return detailDao.getDetailByProductId(productId);
};

module.exports = {getDetailByProductId}