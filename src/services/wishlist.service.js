const wishlistDao = require("../models/wishlist.Dao");

const createWishlist = async (productOptionId, userId) => {
  return await wishlistDao.createWishlist(productOptionId, userId);
};

const getWishlistByUserID = async (userId) => {
  return wishlistDao.getWishlistByUserID(userId);
};

module.exports = {
  createWishlist,
  getWishlistByUserID,
};
