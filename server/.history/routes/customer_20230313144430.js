const express = require("express");
const router = express.Router();

const {
  signup,
  signin,
  signout,
  forgotPassword,
  passwordReset,
} = require("../controllers/customerController");

router.route("/signup").post(signup);
router.route("/signin").post(signin);
router.route("/signout").get(signout);
router.route("/forgotpassword").post(forgotPassword);
router.route("/password/reset/:token").post(passwordReset);

module.exports = router;
