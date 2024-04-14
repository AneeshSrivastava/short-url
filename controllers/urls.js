const shortid = require("shortid");
const URLModel = require("../models");
const config = require("../config");

const handleGenerateNewShortUrl = async (req, res) => {
  const body = req.body;
  const shortId = shortid(config.idCharLength);
  await URLModel.create({
    shortId,
    redirectUrl: body.url,
    visitHistory: [],
  });
  return res.status(200).json({ status: "success", id: shortId });
};

module.exports = {
  handleGenerateNewShortUrl,
};
