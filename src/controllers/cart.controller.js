/* controller 파트는 클라이언트 시스템과 직접적으로 연결되는 부분이다. 
이곳이 바로 백엔드 api에서 엔드포인트 부분에 해땅하는 것이다! 
여기서 엔드포인트를 정의하고 
요청을 읽어 드리는 로직을 구현해야한다. 
시스템이 구현하는 비지니스 로직은 다음 레이어로 넘어간다. 
*/

const cartService = require("../services/cart.service");
const userId = require("../utils/auth");

const addCart = async (req, res) => {

  const {productoptionId, quantity} = req.body;

  const userId = req.user.id
  //console.log(userId)
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

    return res.status(201).json({message : " Removed from Cart! "});
  } catch(err){
    res.status(err.statusCode || 400).json({message : err.message });
  }
}

module.exports = { addCart, removeCart }
