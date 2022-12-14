const searhProductDao = require("../models/search-product-name.models");

const searchProductByName = async(ProductName) => {
    const productName = await searhProductDao.getProductByName (ProductName);

    return productName
};

module.exports = {searchProductByName};