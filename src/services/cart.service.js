const jwt = require("jsonwebtoken");

const cartDao = require("../models/cart.Dao");
const { validateToken } = require("../utils/validators");

const addCart = async ( userId, accessToken ) => {

  const checkToken = await cartDao.addCart(token);

  if(!token) {
    const err = new Error('Access Denied');
    err.statusCode = 404;
    throw err;
  }
  await cartDao.addCart(token)
}



// const removeCart = async () => {


module.exports = { addCart };


