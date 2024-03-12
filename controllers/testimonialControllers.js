const mongoose = require("mongoose");
const testimonialModel = require("../models/testimonialModel");

const getTestimonials = async (req, res) => {
  try {
    const testimonials = await testimonialModel
      .find({})
      .sort({ createdAt: -1 });

    res.status(200).json(testimonials);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getTestimonials };
