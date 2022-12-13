const cartDao = require("../models/cart.Dao");

const createCart = async (productoptionId, quantity, userId) => {
  const carts = cartDao.getCartByUserIdProductOptionId(userId);

  if (carts) {
    //cart가 있다면 수량을 업데이트하고 return 해주는 로직 +1
  } else {
    //cartDao.createCart 를 발동시켜라
  }

  return await cartDao.createCart(productoptionId, quantity, userId);
};

module.exports = { createCart };
