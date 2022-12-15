const cartService = require("../services/cart.service");

const createCart = async (req, res) => {
  try {
    const { productOptionId, quantity } = req.body;
    const userId = req.user.id;

    await cartService.createCart(productOptionId, quantity, userId);

    return res.status(201).json({ message: " Cart Created!" });
  } catch (err) {
    res.status(err.statusCode || 401).json({ message: err.message });
  }
};

const getCartsByUserId = async (req, res) => {
  try {
    const userId = req.user.id;

    const result = await cartService.getCartsByUserId(userId);

    return res.status(200).json({ message: result });
  } catch (err) {
    res.status(err.statusCode || 401).json({ message: err.message });
  }
};

const deleteCartsById = async (req, res) => {
  try {
    const userId = req.user.id;
    //=> token 을 통해 userId를 1로 잘 가져옴
    const cartId = req.params.id;
    //=> cartId를 9로 잘 가져왔다

    const result = await cartService.deleteCartsById(userId, cartId);

    return res.status(200).json({ message: result });
  } catch (err) {
    res.status(err.statusCode || 401).json({ message: err.message });
  }
};

module.exports = {
  createCart,
  getCartsByUserId,
  deleteCartsById,
};
