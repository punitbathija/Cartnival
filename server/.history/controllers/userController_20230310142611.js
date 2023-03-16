const User = require("../models/user");
const BigPromise = require("../middlewares/BigPromise");
const CustomError = require("../utils/customError");
const cloudinary = require("cloudinary");
const cookieToken = require("../utils/cookieToken");
const fileUpload = require("express-fileupload");

exports.signup = BigPromise(async (req, res, next) => {
  if (!req.files) {
    return next(new CustomError("Photo is required for signing up", 400));
  }
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return next(
      new CustomError("Please enter name, email and password to continue")
    );
  }

  let file = req.files;

  const result = cloudinary.v2.uploader.upload(file.tempFlePath, {
    folder: "users",
    width: 150,
    crop: "scale",
  });

  const user = await User.create({
    name,
    email,
    password,
    photo: {
      id: result.public_id,
      secure_url: result.secure_url,
    },
  });

  cookieToken(user, res);
  res.status(200).json({
    success: true,
  });
});
