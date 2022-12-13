const cartDao = require("../models/cart.Dao");

const createCart = async (productoptionId, quantity, userId) => {
  // //const carts = cartDao.getCartByUserIdProductOptionId(productoptionId, userId);

  // if (carts) {
  //   // 수량을 업데이트하고 return 해주는 로직
  // }

  return await cartDao.createCart(productoptionId, quantity, userId);
};

module.exports = { createCart };
