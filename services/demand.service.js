const { Demand, User } = require("../database");



exports.createDemand = async (name, email, type, description, userId) => {
  try {
    const findedUser = await User.findOne({ _id: userId })
    const createdDemand = await Demand.create({ name, email, type, description, userId })
    await User.updateOne({ _id: userId }, { $push: { demandeId: createdDemand._id } })
    return createdDemand
  } catch (error) {
    console.error(error);
    throw error;
  }
};


exports.getDemands = async () => {
  try {
    const demands = await Demand.find().populate('userId');
    return demands
  } catch (error) {
    console.error(error);
    throw error;
  }
}

exports.getDemandsByUser = async (user) => {
  try {
    const demands = await Demand.find({
      userId: user._id
    }).populate('userId');
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
  console.log('demandRespond', id, agentResponse)
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