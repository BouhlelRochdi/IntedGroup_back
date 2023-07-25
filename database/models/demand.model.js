const mongoose = require('mongoose');

const demandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String
  },
  description: {
    type: String,
    required: true,
  },
  agentResponse: {
    type: String,
  }
});

const Demand = mongoose.model('Demand', demandSchema);

module.exports = Demand;
