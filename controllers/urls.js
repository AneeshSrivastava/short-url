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

const handleGetRedirectUrlByShortId = async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URLModel.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  return res.redirect(entry.redirectUrl);
};

module.exports = {
  handleGenerateNewShortUrl,
  handleGetRedirectUrlByShortId,
};
