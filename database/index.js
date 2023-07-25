const mongoose = require('mongoose');

const dbConfig = require('../config/db.config');
const Demand = require('./models/demand.model');


mongoose.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err.message);
  });




  module.exports = {
    Demand: Demand,
  };
  