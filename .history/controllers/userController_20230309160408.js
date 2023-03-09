const User = require("../models/user");
const BigPromise = require("../middlewares/BigPromise");
const CustomError = require("../utils/customError");

exports.signup = BigPromise(async (req, res, next) => {
  if (!req.files) {
    return next(new CustomError("Photo is required for signing up", 400));
  }
});
