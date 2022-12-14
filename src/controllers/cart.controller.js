const cartService = require("../services/cart.service");

const createCart = async (req, res) => {
  try {
    const { productoptionId, quantity } = req.body;
    const userId = req.user.id;

    await cartService.createCart(productoptionId, quantity, userId);

    res.status(201).json({ message: " Cart Created!" });
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
    const { cartId } = req.params;

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
