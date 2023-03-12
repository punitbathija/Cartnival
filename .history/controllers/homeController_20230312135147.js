const BigPromise = require("../middlewares/BigPromise");

exports.home = BigPromise((req, res) => {
  res.status(200).json({
    success: true,
    greeting: "Hello testing the API...",
  });
});
