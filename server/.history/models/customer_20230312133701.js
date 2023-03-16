const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const customerSchema = new mongoose.Schema({
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
  },
  role: {
    type: String,
    default: "customer",
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

// HOOKS

//Encrypting the password before saving on the DB
customerSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

//Validating the password with registered password
customerSchema.methods.isValidatedPassword = async function (comparePassword) {
  return await bcrypt.compare(comparePassword, this.password);
};

//Assigning a JWT to a customer
customerSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_TOKEN_EXPIRY,
  });
};

//Generating forgot password token
customerSchema.methods.getForgotPasswordToken = function () {
  const generateForgotPasswordToken = crypto.randomBytes(20).toString("hex");
  this.forgotPasswordToken = crypto
    .createHash("sha256")
    .update(generateForgotPasswordToken)
    .digest("hex");

  this.forgotPasswordToken = Date.now() + 20 * 60 * 1000;

  return generateForgotPasswordToken;
};

module.exports = mongoose.model("customer", customerSchema);
