const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

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
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: [6, "Password should contain minimum of six characters"],
    select: false,
  },
  role: {
    type: String,
    default: "user",
  },
  photo: {
    id: {
      type: String,
      required: true,
    },
    secure_url: {
      type: String,
      required: true,
    },
  },
  forgotPasswordToken: String,
  forgotPasswordExpiry: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//Encrypting the password before saving on the DB
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

//Validating the password with registered password
