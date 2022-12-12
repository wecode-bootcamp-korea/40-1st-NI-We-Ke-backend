const jwt = require("jsonwebtoken")

//여기서 router에 있는 미들웨어 tokenRequired가 발동되는 것이다
//이 미들웨어를 정의하자면!  
const tokenRequired = async (req, res, next) => { 

  const accessToken = req.header.authorization; //header에 토큰을 가져올 것.
  console.log(accessToken) // ===>여기서 undefined error남!!! 

if(!accessToken) { //accessToken이 없다면 
  const error = new Error(" AccessToken Not Existed ")
  error.statusCode = 401

  return next(error)
}
//정상적으로 token이 들어왔다면! 
//payload 변수에 복호화한 token의 값을 담아라. 여기에 userId의 값을 담았었다 우리는.
const payload = await jwt.verify(accessToken, process.env.JWT_SECRET);

//그리고 여기서 우리는 들어오는 user의 ID를 정의하고 
//그 ID에게 권한⌽을 부여한다.
const user = await userService.getUserByEmail(payload.email)
//유저가 없다면
if (!user) {
  const error = new Error(" User Not Existed! ");
  error.statusCode = 404

  return next(error)
}
//유저가 있다면 ▼ request객체에 user속성을 담고 Next 함수 호출.   
//유저 정보를 필요로 하는 곳은 controller의 addCart함수이다.
req.user = userId;
next();
};

module.exports = { tokenRequired }; //tokenRequired 를 exports 한다.