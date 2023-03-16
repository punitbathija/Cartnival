require("dotenv").config();
const express = require("express");
const app = express();
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
// Defining Middlewares

// Express middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

module.exports = app;
