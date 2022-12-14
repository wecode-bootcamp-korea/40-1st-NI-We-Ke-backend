const cartDao = require("../models/cart.Dao");
const { appDataSource } = require("../models/data-source");

const createCart = async (productoptionId, quantity, userId) => {
  // const carts = cartDao.getCartByUserIdProductOptionId(userId);

  // if (carts) {
  //   //cart가 있다면 수량을 업데이트하고 return 해주는 로직 +1
  // } else {
  //   //cartDao.createCart 를 발동시켜라
  // }

  return await cartDao.createCart(productoptionId, quantity, userId);
};

//(완료)특정user의 모든 장바구니 목록 불러오기
const getCartsByUserId = async (userId) => {
  return cartDao.getCartsByUserId(userId);
};

//(완료)장바구니 모두 지우기
//userId로 장바구니에 접근해서 그냥 모두 지워버리기
// const deleteCartsAll = async (userId) => {
//   return cartDao.deleteCartsAll(userId);
// };

//장바구니 선택 지우기
const deleteCartsById = async (userId, cartId) => {
  return await cartDao.deleteCartsById(userId, cartId);
};

module.exports = {
  createCart,
  getCartsByUserId,
  deleteCartsById,
};
