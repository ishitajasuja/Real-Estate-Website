const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { error } = require("console");
dotenv.config();


mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => console.log("error in db connection"));

  const app = express();
app.listen(3000, () => {
  console.log("listening on port 3000...");
});
