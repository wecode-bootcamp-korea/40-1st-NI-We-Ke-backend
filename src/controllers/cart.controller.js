/* controller 파트는 클라이언트 시스템과 직접적으로 연결되는 부분이다. 
여기서 엔드포인트를 정의하고 
요청을 읽어 드리는 로직을 구현해야한다. 
시스템이 구현하는 비지니스 로직은 다음 레이어로 넘어간다. 
*/

const { tokenRequired } = require("../utils/auth");
const cartService = require("../services/cart.service");

const addCart = async (req, res) => {
  try {
    const { userId, productoptionId, quantity } = req.body;

    userId = tokenRequired.user;

    if (!productoptionId || !quantity) {
      throw new Error("Key Error");
    }
    res.status(200).json({ message: "Created Cart" });
  } catch (err) {
    res.status(err.statusCode || 401).json({ message: err.message });
  }
};

//이미 token을 확인하는 과정에서 userId의 정보가 들어왔었던 것이고
//우리는 클라이언트로부터 넣을 정보만 body로 받으면 되는 것이다.
//그리고 auth.js에서 user의 정보를 req.user에 넣어주었고
//userId라는 변수에 그 값을 다시 저장한 것이다.
//그리고 다음 logic으로 넘어가주면 되는 것.

const removeCart = async (req, res) => {
  try {
    const { userId, userToken } = req.body;

    if (!userId === !userToken) {
      throw new Error("Token Error");
    }
    await cartService.removeCart(userId, userToken);

    return res.status(201).json({ message: " Removed from Cart! " });
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

module.exports = { addCart, removeCart };
