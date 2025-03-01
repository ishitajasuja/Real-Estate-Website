const User = require("../../models/user.model");
const bcryptjs=require("bcryptjs");

const signup = async (req,res,next)=>{
const {username,email,password}=req.body;
const hashedpassword=bcryptjs.hashSync(password,10)
const newUser=new User({username,email,password:hashedpassword});


try{
    await newUser.save();
res.status(201).json("User created successfully");
}
catch(error){
    next(error);
}

}
module.exports=signup;