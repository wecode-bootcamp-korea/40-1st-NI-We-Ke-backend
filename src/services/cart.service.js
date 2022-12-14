const cartDao = require("../models/cart.Dao");

const createCart = async (productoptionId, quantity, userId) => {
  return await cartDao.createCart(productoptionId, quantity, userId);
};

const getCartsByUserId = async (userId) => {
  return cartDao.getCartsByUserId(userId);
};

const deleteCartsById = async (userId, cartId) => {
  return await cartDao.deleteCartsById(userId, cartId);
};

module.exports = {
  createCart,
  getCartsByUserId,
  deleteCartsById,
};
