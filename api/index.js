const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { error } = require("console");
dotenv.config();
const userRouter=require("./routes/user.route");

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => console.log("error in db connection"));

  const app = express();
app.use("/api/user",userRouter);

app.listen(3000 , ()=>{console.log("running on port 3000")});