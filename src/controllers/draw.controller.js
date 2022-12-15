const drawService = require("../services/draw.service");

const getDrawByProductDrawColumn = async (req, res) => {
  try {
    const draw = req.params.id;
    console.log(draw);

    if (!draw) {
      throw new Error("Key Error");
    }

    const result = await drawService.getDrawByProductDrawColumn(draw);

    return res.status(200).json({ message: result });
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

module.exports = { getDrawByProductDrawColumn };
