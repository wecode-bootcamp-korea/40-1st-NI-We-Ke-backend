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

    const reg = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$";
    const txt = "aaaa"
    if( !reg.tesst(txt)) {
      alert("비밀번호 정규식 규칙 위반!!");
      return false
    }

  
  module.exports = {
    validateEmail,
  };