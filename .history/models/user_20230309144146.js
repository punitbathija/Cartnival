const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    maxlenth: [40, "Name should be below 40 characters"],
    validate: [validator.isEmail, "Please enter a valid email id"],
  },
  email: {},
});
