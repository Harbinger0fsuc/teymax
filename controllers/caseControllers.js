const mongoose = require("mongoose");
const caseModel = require("../models/caseModel");

const getCases = async (req, res) => {
  try {
    const cases = await caseModel.find({}).sort({ createdAt: -1 });

    res.status(200).json(cases);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getCases };
