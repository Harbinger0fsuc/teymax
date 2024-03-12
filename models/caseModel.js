const mongoose = require("mongoose");

const caseSchema = mongoose.Schema(
  {
    img: {
      type: String,
      required: true,
    },
    pathTo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Case", caseSchema);
