const mongoose = require("mongoose");

const testimonialSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    logo: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Testimonial", testimonialSchema);
