const { demandService } = require("../services");
const resHandler = require("../helpers/responseHandler.helper");

exports.login = async (req, res) => {
  try {
    resHandler.setSuccess(200, "utilisateur connecté avec succes", {
      token : 'token 123456789'
    });
    return resHandler.send(res);
  } catch (error) {
    console.log(error);
    resHandler.setError(
      400,
      "Erreur de connection merci  verifier les information"
    );
    return resHandler.send(res);
  }
};

