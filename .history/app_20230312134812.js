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

app.set("view engine", "ejs");

// Importing all routes
const customer = require("./routes/customer");
const home = require("./routes/home");
// Router middleware
app.use("/api/v1", home);
app.use("/api/v1", customer);

app.get("/signup", (req, res) => {
  res.render("signup");
});

module.exports = app;
