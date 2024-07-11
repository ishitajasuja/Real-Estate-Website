const mongoose=require("mongoose")
const userSchema = mongoose.Schema({
  username: {
    required: true,
    unique: true,
    type: String,
  },

  email: {
    required: true,
    unique: true,
    type: String,
  },

  password: {
    required: true,
    type: String,
  },
} , {timestamps: true});

const User=mongoose.model('User',userSchema);

module.exports = User;