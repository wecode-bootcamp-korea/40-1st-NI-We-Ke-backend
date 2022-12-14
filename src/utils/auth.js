const jwt = require("jsonwebtoken");
const userDao = require("../models/user.dao");

//여기서 router에 있는 미들웨어 tokenRequired가 발동되는 것이다
//이 미들웨어를 정의하자면!

const tokenRequired = async (req, res, next) => {
  const { Authorization } = req.headers;
  //accesstoken을 받아오는 것은 {Authorizaiton} 으로 보통 받아주는 것이 맞다.

  if (!Authorization) {
    //accessToken이 없다면
    const error = new Error(" AccessToken Not Existed ");
    error.statusCode = 401;

    return next(error);
  }

  const userId = await jwt.verify(Authorization, process.env.JWT_SECRET).userId;

  const user = await userDao.getUserById(userId);

  if (!user) {
    const error = new Error(" User Not existed ! ");
    error.statusCode = 404;

    return next(error);
  }
  req.user = user;
  next();
};

module.exports = { tokenRequired }; //tokenRequired 를 exports 한다.

//위에서 복호화한 token을 payload 라는 값에 넣고
// 그 값을 어떤 user가 갖고 있었는지 확인하는 작업이 밑에
//그리고 여기서 우리는 들어오는 user의 ID를 정의하고
//그 ID에게 권한을 부여한다.
//어딘가에서 user정보를 가져와서 user에 넣어라!

//console.log(userId); //==> payload에 담긴 userId가 1이다

//그렇다면 여기서 이 userId가
//우리가 갖고 있는 user의 정보와 맞는지 확인을 해야한다
//확인을 해서 이 변수 user에 넣고 싶다
//payload에서 받아온 userId를 DB에 있는 user와 비교해봐야한다

//payload의 user 정보와 DB의 user 정보가 다르다면

//유저가 있다면 ▼ request객체에 user속성을 담고 Next 함수 호출.
//유저 정보를 필요로 하는 곳은 controller의 addCart함수이다.
