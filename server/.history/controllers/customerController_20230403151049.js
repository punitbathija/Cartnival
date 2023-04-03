const Customer = require("../models/customer");
const customer = require("../models/customer");
const BigPromise = require("../middlewares/BigPromise");
const CustomError = require("../utils/customError");
const cookieToken = require("../utils/cookieToken");
const mailHelper = require("../utils/mailHelper");
const crypto = require("crypto");

exports.signup = BigPromise(async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return next(new CustomError("Please enter all details to continue", 400));
  }

  const customer = await Customer.create({
    name,
    email,
    password,
  });

  cookieToken(customer, res);
});

exports.signin = BigPromise(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(
      new CustomError("Please enter the email and password to continue", 400)
    );
  }

  const customer = await Customer.findOne({ email }).select("+password");

  if (!customer) {
    return next(
      new CustomError("email or password does not match our records", 400)
    );
  }

  const isPasswordCorrect = await customer.isValidatedPassword(password);

  if (!isPasswordCorrect) {
    return next(new CustomError("Email or password is incorrect", 400));
  }

  cookieToken(customer, res);
});

exports.signout = BigPromise((req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "successfully signed out",
  });
});

exports.forgotPassword = BigPromise(async (req, res, next) => {
  const { email } = req.body;
  const customer = await Customer.findOne({ email });
  if (!customer) {
    return next(new CustomError("Email not found as registered"));
  }
  const forgotPassToken = customer.getForgotPasswordToken();

  await customer.save({ validateBeforeSave: false });

  const myUrl = `${req.protocol}://${req.get(
    "host"
  )}/password/reset/${forgotPassToken}`;

  const message = `Copy the exact URL below and visit the same to continue futher \n \n ${myUrl}`;

  try {
    await mailHelper({
      email: customer.email,
      subject: "Cartnival - Password Reset",
      message,
    });

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    customer.forgotPasswordToken = undefined;
    customer.forgotPasswordExpiry = undefined;
    await customer.save({ validateBeforeSave: false });

    return next(new CustomError(error.message, 500));
  }
});

exports.passwordReset = BigPromise(async (req, res, next) => {
  const token = req.params.token;

  const forgotPasswordToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");

  const customer = await Customer.findOne({
    forgotPasswordToken,
    forgotPasswordExpiry: { $gt: Date.now() },
  });

  if (!customer) {
    return next(new CustomError("Token is invalid or expired"));
  }

  if (req.body.password !== req.body.confirmPassword) {
    return next(new CustomError("Password and confirm password do not match"));
  }

  customer.password = req.body.password;

  customer.forgotPasswordToken = undefined;
  customer.forgotPasswordExpiry = undefined;

  await customer.save();

  cookieToken(customer, res);
});

exports.getMyProfile = BigPromise(async (req, res, next) => {
  const customer = await Customer.findById(req.customer.id);

  res.status(200).json({
    success: true,
    customer,
  });
});

exports.updatePassword = BigPromise(async (req, res, next) => {
  const customerId = req.customer.id;

  const customer = await Customer.findById(customerId).select("+password");

  const vefifyOldPassword = await customer.isValidatedPassword(
    req.body.oldPassword
  );

  if (!vefifyOldPassword) {
    return next(new CustomError("please enter correct password"));
  }

  customer.password = req.body.password;

  await customer.save();

  cookieToken(customer, res);
});

exports.updateProfile = BigPromise(async (req, res, next) => {
  const newData = { name: req.body.name, email: req.body.email };

  const customer = await Customer.findByIdAndUpdate(req.customer.id, newData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    message: "Profile updated",
    customer,
  });
});

exports.adminAllUsers = BigPromise(async (req, res, next) => {
  const allCustomers = await Customer.find();
  res.status(200).json({
    success: true,
    allCustomers,
  });
});

exports.getSingleUser = BigPromise(async (req, res, next) => {
  const customer = await Customer.findById(req.params.id);

  if (!customer) {
    next(new CustomError("no user found", 404));
  }

  res.status(200).json({
    success: true,
    customer,
  });
});

exports.updateRole = BigPromise(async (req, res, next) => {
  const updatedRole = {
    role: req.body.role, // dropdown on frontend would be great
  };

  const customer = await Customer.findByIdAndUpdate(
    req.params.id,
    updatedRole,
    {
      new: true,
      runValidators: true,
      useFindAndModify: true,
    }
  );

  customer.role = req.body.role;

  if (!customer) {
    next(new CustomError("no user found", 404));
  }

  res.status(200).json({
    success: true,
    customer,
  });
});

exports.deleteUser = BigPromise(async (req, res, next) => {
  const customer = await Customer.findById(req.params.id);

  if (!customer) {
    next(new CustomError("no user found", 404));
  }

  await customer.deleteOne();

  res.status(200).json({
    success: true,
    customer,
  });
});

exports.adminSignin = BigPromise(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(
      new CustomError(
        "Please enter an admin email and password to continue",
        400
      )
    );
  }

  const customer = await Customer.findOne({ email }).select("+password");

  if (!customer) {
    return next(
      new CustomError("email or password does not match our records", 400)
    );
  }

  const isPasswordCorrect = await customer.isValidatedPassword(password);

  if (!isPasswordCorrect) {
    return next(new CustomError("Email or password is incorrect", 400));
  }

  cookieToken(customer, res);
});
