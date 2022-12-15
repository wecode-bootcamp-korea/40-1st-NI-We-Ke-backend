const drawDao = require("../models/draw.dao");

const getDrawByProductDrawColumn = async (productDraw) => {
  console.log(getDrawByProductDrawColumn);
  return await drawDao.getDrawByProductDrawColumn(productDraw);
};

module.exports = { getDrawByProductDrawColumn };

//draw = 1 인 상품들을 찾아줘
