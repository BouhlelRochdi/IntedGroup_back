const { demandService } = require("../services");
const resHandler = require("../helpers/responseHandler.helper");

exports.createDemand = async (req, res) => {
  try {
    const { name, email, type, description } = req.body
    const newDemand = await demandService.createDemand(name, email, type, description)
    resHandler.setSuccess(200, "Demande a été ajouter avec succes", newDemand);
    return resHandler.send(res);
  } catch (error) {
    console.log(error);
    resHandler.setError(
      400,
      "Erreur au creation de demande merci de verifier les information"
    );
    return resHandler.send(res);
  }
};

exports.getDemands = async (req, res) => {
  try {
    const demands = await demandService.getDemands()
    resHandler.setSuccess(200, "Demandes a été recupéré avec succes", demands);
    return resHandler.send(res);
  } catch (error) {
    console.log(error);
    resHandler.setError(
      400,
      "Erreur au recupération des demandes"
    );
    return resHandler.send(res);
  }
}


exports.getDemandById = async (req, res) => {
  try {
    const id = req.params.id
    const demand = await demandService.getDemandById(id)
    resHandler.setSuccess(200, "Demande a été recupéré avec succes", demand);
    return resHandler.send(res);
  } catch (error) {
    console.log(error);
    resHandler.setError(
      400,
      "Erreur au recupération des information de demande"
    );
    return resHandler.send(res);
  }
}


exports.deleteDemandById = async (req, res) => {
  try {
    const id = req.params.id
    const deletedDemand = await demandService.deleteDemandById(id)
    resHandler.setSuccess(200, "Demande a été supprimé avec succes", deletedDemand);
    return resHandler.send(res);
  } catch (error) {
    console.log(error);
    resHandler.setError(
      400,
      "Erreur au suppression du demande"
    );
    return resHandler.send(res);
  }
}

exports.demandRespond = async (req, res) => {
  try {
    const id = req.params.id
    const agentResponse = req.body.agentResponse
    const updatedDemand = await demandService.demandRespond(id,agentResponse)
    resHandler.setSuccess(200, "Demande a été repondu avec succes", updatedDemand);
    return resHandler.send(res);
  } catch (error) {
    console.log(error);
    resHandler.setError(
      400,
      "Erreur au reponse du demande"
    );
    return resHandler.send(res);
  }
}


