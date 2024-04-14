const validUrl = require("valid-url");

const validateRequest = (req, res, next) => {
  const body = req.body;
  if (!body?.url) {
    return res.status(400).json({
      status: "failed",
      message: `payload is missing 'url' key`,
    });
  }
  console.log("Payload validated!");
  if (!validUrl.isHttpsUri(body.url)) {
    return res.status(400).json({
      status: "failed",
      message: `provided 'url' is not a valid url`,
    });
  }
  console.log("URL validated!");
  next();
};

module.exports = {
  validateRequest,
};
