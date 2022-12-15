const drawService = require("../services/draw.service");

const getDrawByProductDrawColumn = async (req, res) => {
  try {
    const draw = req.params;
    console.log(draw);

    //현재 이 draw가 빈 객체다 {} 1이 나와야하는데 ㅠㅠ
    if (!draw) {
      throw new Error("Key Error");
    }

    const result = await drawService.getDrawByProductDrawColumn;

    return res.status(200).json({ message: result });
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

module.exports = { getDrawByProductDrawColumn };
