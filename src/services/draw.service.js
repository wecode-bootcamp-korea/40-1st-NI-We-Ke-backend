const drawDao = require("../models/draw.dao");

const getDrawByProductDrawColumn = async () => {
  return await drawDao.getDrawByProductDrawColumn();
};

module.exports = { getDrawByProductDrawColumn };

//draw = 1 인 상품들을 찾아줘
