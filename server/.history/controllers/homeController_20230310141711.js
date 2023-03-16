const BigPromise = require("../middlewares/BigPromise");

exports.home = BigPromise((req, res) => {
  res.send.json({
    success: true,
    greeting: "Hello testing the API...",
  });
});
