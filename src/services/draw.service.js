const drawDao = require("../models/draw.dao");

const getProductsInDraw = async () => {
  return await drawDao.getProductsInDraw();
};

module.exports = { getProductsInDraw };
