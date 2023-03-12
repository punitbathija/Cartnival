const express = require("express");
const router = express.Router();

const { signup, signin } = require("../controllers/customerController");

router.route("/signup").post(signup);
router.route("/signup").post(signin);

module.exports = router;
