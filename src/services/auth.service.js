const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userDao = require("../models/user.dao");

const { validateEmail, validatePassword } = require("../utils/validators");

const signUp = async (email, password) => {
  validateEmail(email);
  validatePassword(password);

  const user = await userDao.getUserByEmail(email);

  if (user) {
    const err = new Error("duplicated email");
    err.statusCode = 400;
    throw err;
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  await userDao.createUser(email, hashedPassword);
};

const signIn = async (email, password) => {
  const user = await userDao.getUserByEmail(email);

  if (!user) {
    const err = new Error("specified user does not exist");
    err.statusCode = 404;
    throw err;
  }
  const result = await bcrypt.compare(password, user.password);

  if (!result) {
    const err = new Error("invalid password");
    err.statusCode = 401;
    throw err;
  }

  const accessToken = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

  return accessToken;
};

module.exports = { signUp, signIn };
