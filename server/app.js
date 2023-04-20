require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require('path');
const app = express();
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");


// Defining Middlewares

const corsOptions = {
  origin: "https://cartnival.onrender.com",
};

// Express middlewares.
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client', 'dist')));


// Cookies & file upload middlewares

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
const stripe = require("./routes/stripe");

// Router middleware
app.use("/api/v1", customer);
app.use("/api/v1", product);
app.use("/api/v1", order);
app.use("/api/v1", payment);
app.use("/api/v1", stripe);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

module.exports = app;
