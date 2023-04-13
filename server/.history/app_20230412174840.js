require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");

// Defining Middlewares

// Express middlewares.
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookies & file upload middlewares

app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.use(bodyParser.raw({ type: "application/json" }));

// Importing all routes
const customer = require("./routes/customer");
const product = require("./routes/product");
const order = require("./routes/order");
const payment = require("./routes/payment");
const bodyParser = require("body-parser");

// Router middleware
app.use("/api/v1", customer);
app.use("/api/v1", product);
app.use("/api/v1", order);
app.use("/api/v1", payment);

// function maybe(fn) {
//   return function (req, res, next) {
//     if (
//       req.path === "/webhook" ||
//       (req.path === "/api/v1/webhook" && req.method === "POST")
//     ) {
//       next();
//     } else {
//       fn(req, res, next);
//     }
//   };
// }

module.exports = app;
