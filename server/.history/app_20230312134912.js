require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
// Defining Middlewares

// Express middlewares
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

// Importing all routes
const home = require("./routes/home");
const customer = require("./routes/customer");

// Router middleware
app.use("/api/v1", home);
app.use("/api/v1", customer);

module.exports = app;
