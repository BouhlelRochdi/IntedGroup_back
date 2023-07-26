const jwt = require("jsonwebtoken");
const JWTSECRET = "secret";

exports.checkToken = async (token) => {
    try {
      var decoded = jwt.verify(token, JWTSECRET);
      return decoded;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  exports.createToken = async (id) => {
    token = jwt.sign({ id: id }, JWTSECRET, { expiresIn: "100h" });
    return token;
  };
  
