const express = require("express");
const router = express.Router();
const { getDownloads } = require("../controllers/download.controller");

router.get("/", getDownloads);

module.exports = router;
