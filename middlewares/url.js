const validUrl = require("valid-url");

const validateRequest = () => {
  return (req, res, next) => {
    const body = req.body;
    if (!body?.url) {
      return res.status(400).json({
        status: "failed",
        message: `payload is missing 'url' key`,
      });
    }
    if (!validUrl.isHttpsUri(body.url)) {
      return res.status(400).json({
        status: "failed",
        message: `provided 'url' is not a valid url`,
      });
    }
    next();
  };
};

module.exports = {
  validateRequest,
};
