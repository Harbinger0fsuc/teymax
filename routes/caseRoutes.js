const express = require("express");
const router = express.Router();
const { getCases } = require("../controllers/caseControllers");

router.get("/", getCases);

module.exports = router;
