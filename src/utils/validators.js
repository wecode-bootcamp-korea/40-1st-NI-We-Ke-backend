const validateEmail = (email) => {
    const re = new RegExp(
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
    );
  
    if (!re.test(email)) {
      const err = new Error("invalid email");
      err.statusCode = 400;
      throw err;
    }
  };

  const validatePassword = (password) => {
    const rez = new RegExp(
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
    );
  
    if (!rez.test(email)) {
      const err = new Error("invalid password");
      err.statusCode = 400;
      throw err;
    }
  };

  
  module.exports = {
    validateEmail,validatePassword
  };