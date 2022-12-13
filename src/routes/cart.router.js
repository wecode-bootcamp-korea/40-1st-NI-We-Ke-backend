const express = require("express");

const { tokenRequired } = require("../utils/auth");
const cartController = require("../controllers/cart.controller");

const cartRouter = express.Router();

cartRouter.post("", tokenRequired, cartController.createCart);
//수량이 추가되는 로직을 추가로 구현
cartRouter.get("");
cartRouter.delete("");
//삭제: 선택삭제냐 전체삭제냐 중복선택삭제냐
// 프론트에서 바디로 보내는걸 받을 수 있게 구현하냐
// http -v DELETE localhost:3000/carts (바디에 담음)
// 프론트에서 쿼리로 보내는걸 받을 수 있게 구현하냐
// http -v DELETE localhost:3000/carts?cartId=1&cartId=2&cartId=3

//cartRouter.delete("/", cartController.removeCart);

module.exports = { cartRouter };
