const cartService = require("../services/cart.service");
//const { tokenRequired } = require("../utils/auth");

const createCart = async (req, res) => {
  try {
    const { productoptionId, quantity } = req.body;
    const userId = req.user.id;

    await cartService.createCart(productoptionId, quantity, userId);

    res.status(201).json({ message: " Cart Created!" });
  } catch (err) {
    res.status(err.statusCode || 401).json({ message: err.message });
  }
};
//먼저생각을 해보자. cart에 들어있는 모든 아이템들의 정보를 가져온다고 생각했을때
//

const getCartsByUserId = async (req, res) => {
  try {
    const userId = req.user.id;

    const result = await cartService.getCartsByUserId(userId);

    return res.status(200).json({ message: result });
  } catch (err) {
    res.status(err.statusCode || 401).json({ message: err.message });
  }
};

//이미 token을 확인하는 과정에서 userId의 정보가 들어왔었던 것이고
//우리는 클라이언트로부터 넣을 정보만 body로 받으면 되는 것이다.
//그리고 auth.js에서 user의 정보를 req.user에 넣어주었고
//userId라는 변수에 그 값을 다시 저장한 것이다.
//그리고 다음 logic으로 넘어가주면 되는 것.

// const removeCart = async (req, res) => {
//   try {
//     const { userId, userToken } = req.body;

//     if (!userId === !userToken) {
//       throw new Error("Token Error");
//     }
//     await cartService.removeCart(userId, userToken);

//     return res.status(201).json({ message: " Removed from Cart! " });
//   } catch (err) {
//     res.status(err.statusCode || 400).json({ message: err.message });
//   }
// };

module.exports = { createCart, getCartsByUserId };
