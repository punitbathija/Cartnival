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

app.post("/webhook", async (req, res) => {
  // Verify the signature of the incoming webhook event
  const sig = req.headers["stripe-signature"];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.log("Webhook signature verification failed.", err.message);
    return res.sendStatus(400);
  }

  // Handle the event based on its type
  switch (event.type) {
    case "payment_intent.succeeded":
      // Extract the payment intent object from the event
      const paymentIntent = event.data.object;

      // TODO: Implement your own logic here to process the payment and create orders on your app

      console.log(`PaymentIntent ${paymentIntent.id} succeeded.`);
      break;
    case "payment_intent.payment_failed":
      console.log("Payment failed.");
      break;
    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  // Return a 200 OK response to acknowledge receipt of the webhook event
  res.sendStatus(200);
});

module.exports = app;
