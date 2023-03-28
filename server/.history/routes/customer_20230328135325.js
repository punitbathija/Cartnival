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
  getSingleUser,
  deleteUser,
  updateRole,
} = require("../controllers/customerController");
const { isLoggedin, customRole } = require("../middlewares/customer");

router.route("/signup").post(signup);
router.route("/signin").post(signin);
router.route("/signout").get(signout);
router.route("/forgotpassword").post(forgotPassword);
router.route("/password/reset/:token").post(passwordReset);
router.route("/myprofile").get(isLoggedin, getMyProfile);
router.route("/myprofile/password/update").post(isLoggedin, updatePassword);
router.route("/myprofile/update").post(isLoggedin, updateProfile);

// Admin Routes

router.route("/admin/signin").post(signin);
router
  .route("/admin/getallusers")
  .get(isLoggedin, customRole("admin"), adminAllUsers);
router
  .route("/admin/user/:id")
  .get(isLoggedin, customRole("admin"), getSingleUser);
router
  .route("/admin/user/:id")
  .put(isLoggedin, customRole("admin"), updateRole);
router
  .route("/admin/user/:id")
  .delete(isLoggedin, customRole("admin"), deleteUser);

module.exports = router;
