const drawService = require("../services/draw.service");

const getProductsInDraw = async (req, res) => {
  try {
    const result = await drawService.getProductsInDraw();

    return res.status(200).json({ message: result });
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

module.exports = { getProductsInDraw };
