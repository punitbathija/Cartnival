const Customer = require("../models/customer");
const CustomError = require("../utils/customError");
const BigPromise = require("./BigPromise");
const jwt = require("jsonwebtoken");

exports.isLoggedin = BigPromise(async (req, res, next) => {
  let token = req.cookies.token;
  console.log(token);
  if (!token && req.header("Authorization")) {
    token = req.header("Authorization").replace("Bearer ", "");
  }

  if (!token) {
    return next(new CustomError("Login first to get user profile", 401));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  req.customer = await Customer.findById(decoded.id);

  next();
});

exports.customRole = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.customer.role)) {
      return next(
        new CustomError("you are not allowed to visit this resource", 402)
      );
    }
    next();
  };
};
