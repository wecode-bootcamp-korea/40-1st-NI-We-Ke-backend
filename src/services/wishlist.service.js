const wishlistDao = require("../models/wishlist.Dao");

const createWishlist = async (productOptionId, userId) => {
  return await wishlistDao.createWishlist(productOptionId, userId);
};

const getWishlistByUserId = async (userId) => {
  return wishlistDao.getWishlistByUserId(userId);
};

module.exports = {
  createWishlist,
  getWishlistByUserId,
};
