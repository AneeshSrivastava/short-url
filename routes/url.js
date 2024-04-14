const {
  handleGenerateNewShortUrl,
  handleGetRedirectUrlByShortId,
} = require("../controllers/urls");
const { validateRequest } = require("../middlewares/url");

const express = require("express");

const router = express.Router();

router.route("/").post(validateRequest, handleGenerateNewShortUrl);

router.route("/:shortId").get(handleGetRedirectUrlByShortId);

module.exports = router;
