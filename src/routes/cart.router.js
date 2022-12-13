const express = require("express");

const cartController = require("../controllers/cart.controller");

const { tokenRequired } = require("../utils/auth");

const cartRouter = express.Router();

cartRouter.post("/", tokenRequired, cartController.addCart);
/*여기서 auth.js를 불러와야할 것 같다.
auth.js를 불러와서 여기서 token이 확인되어야할 것 같다.
tokenRequired 미들웨어함수를 여기서 발동시켜서 cartRouter post 모든 동작에서 
이 미들웨어가 발동 될 수 있도록 만들어준다. 
*/

cartRouter.delete("/", cartController.removeCart);

module.exports = { cartRouter };
