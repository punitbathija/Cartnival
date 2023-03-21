require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
// Defining Middlewares

// Express middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookies & file upload middlewares
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
  );
  next();
});

app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// Importing all routes
const customer = require("./routes/customer");
const product = require("./routes/product");
const order = require("./routes/order");
const payment = require("./routes/payment");

// Router middleware
app.use("/api/v1", customer);
app.use("/api/v1", product);
app.use("/api/v1", order);
app.use("/api/v1", payment);

module.exports = app;
