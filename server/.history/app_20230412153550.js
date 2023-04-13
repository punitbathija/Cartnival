require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");

// Defining Middlewares

// Express middlewares.
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookies & file upload middlewares

app.use(bodyParser.json());

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

app.use((req, res, next) => {
  if (req.originalUrl === "/webhook") {
    next();
  } else {
    express.json()(req, res, next);
  }
});

app.post("/webhook", express.raw({ type: "application/json" }), (req, res) => {
  const sig = req.headers["stripe-signature"];

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
  } catch (err) {
    // On error, log and return the error message
    console.log(`❌ Error message: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Successfully constructed event
  console.log("✅ Success:", event.id);

  // Return a response to acknowledge receipt of the event
  res.json({ received: true });
});

module.exports = app;
