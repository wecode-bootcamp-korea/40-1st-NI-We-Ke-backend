const jwt = require("jsonwebtoken");

const cartDao = require("../models/cart.Dao");
const { validateToken } = require("../utils/validators");

const addCart = async ( userId, accessToken ) => {
  validateToken(accessToken)

  const checkToken = await cartDao.addCart(accessToken);

  if(!accessToken) {
    const err = new Error('Access Denied');
    err.statusCode = 404;
    throw err;
  }
  await cartDao.addCart(accessToken)
}



// const removeCart = async () => {


module.exports = { addCart };


