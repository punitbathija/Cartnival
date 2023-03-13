const express = require("express");
const router = express.Router();

const {
  signup,
  signin,
  signout,
  forgotPassword,
} = require("../controllers/customerController");

router.route("/signup").post(signup);
router.route("/signin").post(signin);
router.route("/signout").get(signout);

module.exports = router;
