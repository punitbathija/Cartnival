const Customer = require("../models/customer");
const BigPromise = require("../middlewares/BigPromise");
const CustomError = require("../utils/customError");
const cookieToken = require("../utils/cookieToken");

exports.signup = BigPromise(async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return next(new CustomError("Please enter all details to continue", 400));
  }

  const customer = await Customer.create({
    name,
    email,
    password,
    cookieToken(customer, res);

  });

});
