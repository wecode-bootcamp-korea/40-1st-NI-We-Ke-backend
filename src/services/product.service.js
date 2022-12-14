const searhProductDao = require("../models/product.models");

const searchProductByName = async(productNames) => {
    const productName = await searhProductDao.getProductByName (productNames);

    return productName
};

module.exports = {searchProductByName};