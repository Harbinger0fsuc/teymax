const express = require("express");
const router = express.Router();
const { getTestimonials } = require("../controllers/testimonialControllers");

router.get("/", getTestimonials);

module.exports = router;
