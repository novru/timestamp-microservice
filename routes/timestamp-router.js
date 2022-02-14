const express = require("express");
const router = express.Router();

const { timestamp } = require("../controllers/timestamp");

router.route("/:date?").get(timestamp);

module.exports = router;
