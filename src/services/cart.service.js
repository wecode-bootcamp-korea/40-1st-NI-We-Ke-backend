const cartDao = require("../models/cart.Dao");

const { addCart } = require("../controllers/cart.controller");

//여기서 userId를 가져와서, 특정 user의 장바구니를
const addToCart = async (req, res) => {
  const userId = addCart.userId;
  const userCart = req.params.productoptionId;
};

// const removeCart = async () => {

module.exports = { addToCart };
