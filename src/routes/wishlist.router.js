const express = require("express");

const { tokenRequired } = require("../utils/auth");
const wishlistController = require("../controllers/wishlist.controller");

const wishlistRouter = express.Router();

wishlistRouter.get("", tokenRequired, wishlistController.createWishlist);
wishlistRouter.post("", tokenRequired, wishlistController.getWishlistByUserId);

module.exports = { wishlistRouter };
