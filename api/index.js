const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { error } = require("console");
dotenv.config();
const userRouter=require("./routes/user.route");
const authRouter=require("./routes/auth.route");

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => console.log("error in db connection"));

  const app = express();

  app.use(express.json());
app.use("/api/user",userRouter);
app.use("/api/auth", authRouter);

app.use((err,req,res,next)=>{
  const statusCode=err.statusCode || 500;
  const message=err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
})

app.listen(3000 , ()=>{console.log("running on port 3000")});