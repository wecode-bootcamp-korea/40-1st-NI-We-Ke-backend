const wishlistService = require("../services/wishlist.service");

const createWishlist = async (req, res) => {
  try {
    const { productoptionId } = req.body;
    const userId = req.user.id;

    await wishlistService.createWishlist(productoptionId, userId);

    res.status(201).json({ message: " Wishlist Created!" });
  } catch (err) {
    res.status(err.statusCode || 401).json({ message: err.message });
  }
};

const getWishlistByUserId = async (req, res) => {
  try {
    const userId = req.user.id;

    const result = await wishlistService.getWishlistByUserId(userId);

    return res.status(200).json({ message: result });
  } catch (err) {
    res.status(err.statusCode || 401).json({ message: err.message });
  }
};

module.exports = { createWishlist, getWishlistByUserId };
