require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();

app.listen(PORT, (req, res) => {
  console.log("App listening on port 3002");
  mongoose.connect(url);
  console.log("DB connected!");
});
