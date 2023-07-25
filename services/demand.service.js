const { Demand } = require("../database");



exports.createDemand = async (name, email, type, description) => {
  try {
    const createdDemand = await Demand.create({ name, email, type, description })
    return createdDemand
  } catch (error) {
    console.error(error);
    throw error;
  }
};


exports.getDemands = async () => {
  try {
    const demands = await Demand.find()
    return demands
  } catch (error) {
    console.error(error);
    throw error;
  }
}

exports.getDemandById = async (id) => {
  try {
    const demand = await Demand.findById(id)
    return demand
  } catch (error) {
    console.error(error);
    throw error;
  }
}

exports.deleteDemandById = async (id) => {
  try {
    const deletedDemand = await Demand.deleteOne({
      _id: id
    })
    return deletedDemand
  } catch (error) {
    console.error(error);
    throw error;
  }
}

exports.demandRespond = async (id, agentResponse) => {
  try {
    const updatedDemand = await Demand.updateOne({
      _id: id
    }, {
      agentResponse: agentResponse
    })
    return updatedDemand
  } catch (error) {
    console.error(error);
    throw error;
  }
}