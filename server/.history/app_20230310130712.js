const express = require("express");

require("dotenv").config();
const app = express();
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
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
const user = require("./routes/user");

// Router middleware
app.use("/api/v1", user);

module.exports = app;
