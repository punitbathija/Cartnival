const Customer = require("../models/customer");
const BigPromise = require("../middlewares/BigPromise");
const CustomError = require("../utils/customError");
const cookieToken = require("../utils/cookieToken");

exports.signup = BigPromise(async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!email || !name || !password) {
    return next(new CustomError("Please enter all details to continue", 400));
  }

  let file = req.files.photo;

  const result = await cloudinary.v2.uploader.upload(file.tempFilePath, {
    folder: "customers",
    width: 150,
    crop: "scale",
  });

  const customer = await customer.create({
    name,
    email,
    password,
    photo: {
      id: result.public_id,
      secure_url: result.secure_url,
    },
  });

  cookieToken(customer, res);
});
