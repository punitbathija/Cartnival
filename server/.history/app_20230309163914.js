require("dotenv").config();
const { urlencoded } = require("express");
const express = require("express");
const app = express();
const fileUpload = require("express-fileupload");

// Defining Middlewares

// Express middlewares
app.use(express.json());
app.use(urlencoded({ extended: true }));

module.exports = app;
