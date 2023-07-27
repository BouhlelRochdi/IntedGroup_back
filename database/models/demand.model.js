const mongoose = require('mongoose');

const demandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
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
  },
  userId : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'User',
    require : true
  }
});

const Demand = mongoose.model('Demand', demandSchema);

module.exports = Demand;
