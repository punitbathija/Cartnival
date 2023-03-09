const User = require("../models/user");
const BigPromise = require("../middlewares/BigPromise");
const CustomError = require("../utils/customError");

exports.signup = BigPromise(async(req, res, next));
