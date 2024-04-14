const mongoose = require("mongoose");

const connectToDb = async (connectionUrl) => {
  return mongoose.connect(connectionUrl);
};

module.exports = connectToDb;
