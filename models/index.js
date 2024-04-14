const mongoose = require("mongoose");
const config = require("../config");
const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectUrl: {
      type: String,
      required: true,
    },
    visitHistory: [{ timestamp: { type: Number } }],
  },
  { timestamps: true }
);

const URLModel = mongoose.model(config.collectionName, urlSchema);

module.exports = URLModel;
