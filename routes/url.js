const { handleGenerateNewShortUrl } = require("../controllers/urls");
const express = require("express");

const router = express.Router();

router.route("/").post(handleGenerateNewShortUrl);

module.exports = router;
