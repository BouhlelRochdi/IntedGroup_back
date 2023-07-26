const { userService } = require("../services");
const resHandler = require("../helpers/responseHandler.helper");
const { compare, crypt } = require("../helpers/crypt.helper");
const { createToken } = require("../helpers/jwt.helper");

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await userService.getUserByEmail(email)
    if (!user) {
      resHandler.setError(
        400,
        "utilisateur non trouver"
      );
      return resHandler.send(res);
    }

    const comparedPassword = await compare(user.password, password)
    if (!comparedPassword) {
      resHandler.setError(
        400,
        "mot de passe incorrect"
      );
      return resHandler.send(res);
    }
    const token = await createToken(user._id)
    delete user.password
    resHandler.setSuccess(200, "utilisateur connecté avec succes", {
      user,
      token
    });
    return resHandler.send(res);
  } catch (error) {
    console.log(error);
    resHandler.setError(
      400,
      "Erreur de connection merci de  verifier les information"
    );
    return resHandler.send(res);
  }
};

exports.signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body
    const existedUser = await userService.getUserByEmail(email)
    if (existedUser) {
      resHandler.setError(400, "email deja existe");
      return resHandler.send(res);
    }
    const hashedPassword = await crypt(password)
    const user = await userService.signup(name, email, hashedPassword, role)
    delete user.password
    delete user._id
    resHandler.setSuccess(200, "utilisateur enregistrer avec succes", user);
    return resHandler.send(res);
  } catch (error) {
    console.log(error);
    resHandler.setError(
      400,
      "Erreur lors de creation du compte"
    ); 
    return resHandler.send(res);
  }
};

exports.getCurrentUser = async (req, res) => {
  try {
    let user = req.profil
    delete user.password
    resHandler.setSuccess(200, "utilisateur recuperer avec succes", user);
    return resHandler.send(res);
  }
  catch (error) {
    console.log(error);
    resHandler.setError(
      400,
      "Erreur lors de creation du compte"
    );
    return resHandler.send(res);
  }
};