const { userService, authService } = require("../services");
const resHandler = require("../helpers/responseHandler.helper");
const { checkToken } = require("../helpers/jwt.helper");

exports.checkToken = async (req, res, next) => {
  try {
    const decoded = await checkToken(req.headers["authorization"]);
      const profil = await userService.getUserById(decoded.id);
      req.profil = profil;
      return next();
  } catch (error) {
    resHandler.setError(
      401,
      error.message
    );
    return resHandler.send(res);
  }
};
