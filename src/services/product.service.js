const searhProductDao = require("../models/product.dao");

const searchProductByName = async(productNames) => {
    const productName = await searhProductDao.getProductByName (productNames);

    return productName
};

module.exports = {searchProductByName};