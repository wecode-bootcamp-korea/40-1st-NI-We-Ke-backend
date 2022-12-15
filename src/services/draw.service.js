const drawDao = require("../models/draw.dao");

const getDrawByProductDrawColumn = async (draw) => {
  return await drawDao.getDrawByProductDrawColumn(draw);
};

module.exports = { getDrawByProductDrawColumn };
