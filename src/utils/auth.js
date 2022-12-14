const jwt = require("jsonwebtoken");
const { SimpleConsoleLogger } = require("typeorm");
const userDao = require("../models/user.dao");
//여기서 router에 있는 미들웨어 tokenRequired가 발동되는 것이다
//이 미들웨어를 정의하자면!
const tokenRequired = async (req, res, next) => {
  const { accesstoken } = req.headers; //header에 토큰을 가져올 것.headers의 accesstoken을 가져오는 것이라, accessToken이라고 치면 오류가 날 수 있음
  //console.log(req.headers.accesstoken); //=> 토큰 가져오는 것까지 성공!!
  if (!accesstoken) {
    //accessToken이 없다면
    const error = new Error(" AccessToken Not Existed");
    error.statusCode = 401;
    return next(error);
  }
  const userId = await jwt.verify(accesstoken, process.env.JWT_SECRET).userId;
  const user = await userDao.getUserById(userId);
  if (!user) {
    const error = new Error("User Not existed ! ");
    error.statusCode = 404;
    return next(error);
  }
  req.user = user;
  next();
};
module.exports = { tokenRequired }; 