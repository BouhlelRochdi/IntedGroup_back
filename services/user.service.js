const { User } = require("../database");
const { findOne } = require("../database/models/demand.model");

exports.signup = async (name, email, password, role) => {
  try {
    const demands = await User.create({
      name, email, password, role
    })
    return demands
  } catch (error) {
    console.error(error);
    throw error;
  }
}

exports.getUserById = async (id) => {
  try {
    const user = await User.findOne({ _id: id })
    return user
  } catch (error) {
    console.error(error);
    throw error;
  }
}

exports.getUserByEmail = async (email) => {
  try {
    const user = User.findOne({
      email: email
    })
    return user
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