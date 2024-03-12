const mongoose = require("mongoose");

const teamSchema = mongoose.Schema(
  {
    image: String,
    name: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Team", teamSchema);
