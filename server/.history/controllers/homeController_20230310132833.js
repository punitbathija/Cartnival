const BigPromise = require("../middlewares/BigPromise");

exports.home = BigPromise((req, res) => {
  res.send(200).json({
    success: true,
    greeting: "Hello testing the API...",
  });
});
