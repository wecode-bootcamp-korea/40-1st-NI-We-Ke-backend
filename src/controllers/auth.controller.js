const authService = require('../services/auth.service');

const signUp = async (req, res) => {
  try {
    const { email, password } = req.body;

    if( !email || ! password) {
      throw new Error("Key Error")
    }

    await authService.signUp(email, password);

    return res.status(201).json({message : "success"})
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if( !email || ! password) {
      throw new Error("Key Error")
    }

    const accessToken = await authService.signIn(email, password);

    res.status(200).json({ accessToken: accessToken });
  } catch (err) {
    res.status(err.statusCode || 401).json({ message: err.message });
  }
};

module.exports = { signUp, signIn };