const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    maxlenth: [40, "Name should be below 40 characters"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email address"],
    validate: [validator.isEmail, "Please enter a valid email id"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: [6, "Password should contain minimum of six characters"],
    select: false,
  },
  role: {
    type: String,
    default: "user",
  },
});
