const express = require("express");
const router = express.Router();
const { getTeam } = require("../controllers/teamControllers");

router.get("/", getTeam);

module.exports = router;
