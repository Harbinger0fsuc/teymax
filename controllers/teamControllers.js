const mongoose = require("mongoose");
const teamModel = require("../models/teamModel");

const getTeam = async (req, res) => {
  try {
    const team = await teamModel.find({}).sort({ createdAt: -1 });

    res.status(200).json(team);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getTeam };
