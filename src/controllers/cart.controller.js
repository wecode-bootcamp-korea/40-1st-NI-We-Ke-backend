/* controller 파트는 클라이언트 시스템과 직접적으로 연결되는 부분이다. 
이곳이 바로 백엔드 api에서 엔드포인트 부분에 해땅하는 것이다! 
여기서 엔드포인트를 정의하고 
요청을 읽어 드리는 로직을 구현해야한다. 
시스템이 구현하는 비지니스 로직은 다음 레이어로 넘어간다. 
*/

const cartService = require("../services/cart.service")

const addCart = async (req, res) => {
//내생각에는 장바구니에 넣기위해 JWT 토큰을 한번 확인해야할 것 같아 일단 고 
  try {
    const { userId, userToken } = req.body; //Token을 실제로 담고 있는 변수 찾아서 수정 필요. 

  if ( !userId === userToken ) {
      throw new Error("Token Error");
  }
     await cartService.addCart(userId, userToken);
    
     return res.status(201).json({message : " Added to Cart! "})
  } catch(err) {
     res.status(err.statusCode || 400).json({ message : err.message })
  }
}

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
