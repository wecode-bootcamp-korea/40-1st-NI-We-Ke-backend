const jwt = require("jsonwebtoken");
const userDao = require("../models/user.dao");

//여기서 router에 있는 미들웨어 tokenRequired가 발동되는 것이다
//이 미들웨어를 정의하자면!

const tokenRequired = async (req, res, next) => {
  const { accesstoken } = req.headers; //header에 토큰을 가져올 것.headers의 accesstoken을 가져오는 것이라, accessToken이라고 치면 오류가 날 수 있음
  console.log(req.headers.accesstoken); //=> 토큰 가져오는 것까지 성공!!

  if (!accesstoken) {
    //accessToken이 없다면
    const error = new Error(" AccessToken Not Existed ");
    error.statusCode = 401;

    return next(error);
  }
  //정상적으로 token이 들어왔다면!
  //payload 변수에 복호화한 token의 값을 담아라. 여기에 userId의 값을 담았었다 우리는.
  const payload = await jwt.verify(accesstoken, process.env.JWT_SECRET);
  console.log(payload); //=> 여기 복호화까지는 성공!!!

  //위에서 복호화한 token을 payload 라는 값에 넣고
  // 그 값을 어떤 user가 갖고 있었는지 확인하는 작업이 밑에
  //그리고 여기서 우리는 들어오는 user의 ID를 정의하고
  //그 ID에게 권한을 부여한다.
  //어딘가에서 user정보를 가져와서 user에 넣어라!
  const userId = payload.userId;
  console.log(userId); //==> payload에 담긴 userId가 1이다

  //그렇다면 여기서 이 userId가
  //우리가 갖고 있는 user의 정보와 맞는지 확인을 해야한다
  //확인을 해서 이 변수 user에 넣고 싶다
  //payload에서 받아온 userId를 DB에 있는 user와 비교해봐야한다

  const user = await userDao.getUserById(userId);
  console.log(user); // ==> 여기서 막힘.. user를 못데려와

  //payload의 user 정보와 DB의 user 정보가 다르다면
  if (!user) {
    const error = new Error(" User Not Existed! ");
    error.statusCode = 404;

    return next(error);
  }
  //유저가 있다면 ▼ request객체에 user속성을 담고 Next 함수 호출.
  //유저 정보를 필요로 하는 곳은 controller의 addCart함수이다.
  user = req.user;
  next();
};

module.exports = { tokenRequired }; //tokenRequired 를 exports 한다.
