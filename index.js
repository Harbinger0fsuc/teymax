require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3500;
// const caseModel = require("./models/caseModel");
const teamRoutes = require("./routes/teamRoutes");
const testimonialRoutes = require("./routes/testimonialRoutes");
const caseRoutes = require("./routes/caseRoutes");
// const casesJson = require("./cases.json");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/team", teamRoutes);
app.use("/api/v1/testimonials", testimonialRoutes);
app.use("/api/v1/cases", caseRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "teymax",
  })
  .then(() => {
    console.log("Connected to the database");
    app.listen(PORT, () => {
      console.log(`Port is ${PORT}`);
    });
  })
  // .then(() => {
  //   caseModel.create(casesJson);
  // })
  .catch((err) => {
    console.log(err);
  });
