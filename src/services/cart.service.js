const cartDao = require("../models/cart.Dao");

const createCart = async (productOptionId, quantity, userId) => {
  const cart = await cartDao.getCartByProductOptionId(userId, productOptionId);

  if (cart.length > 0)
    return await cartDao.updateCart(productOptionId, quantity, userId);

  return await cartDao.createCart(productOptionId, quantity, userId);
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
