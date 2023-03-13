const express = require("express");
const router = express.Router();

const {
  signup,
  signin,
  signout,
  forgotPassword,
  passwordReset,
  getMyProfile,
  updatePassword,
  updateProfile,
  adminAllUsers,
} = require("../controllers/customerController");
const { isLoggedin, customRole } = require("../middlewares/user");

router.route("/signup").post(signup);
router.route("/signin").post(signin);
router.route("/signout").get(signout);
router.route("/forgotpassword").post(forgotPassword);
router.route("/password/reset/:token").post(passwordReset);
router.route("/myprofile").get(isLoggedin, getMyProfile);
router.route("/password/update").post(isLoggedin, updatePassword);
router.route("/profile/update").post(isLoggedin, updateProfile);
router
  .route("/admin/getallusers")
  .get(isLoggedin, customRole("admin"), adminAllUsers);

module.exports = router;
