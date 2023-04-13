require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { Buffer } = require("buffer");
const bodyParser = require("body-parser");

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

router.post(
  "api/v1/webhook",
  bodyParser.raw({ type: "application/json" }),
  (req, res) => {
    const sig = req.headers["stripe-signature"];
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    console.log(sig);

    const buf = Buffer.from(req.body);

    let event;

    try {
      event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
    } catch (err) {
      // On error, log and return the error message
      console.log(`❌ Error message: ${err.message}`);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    console.log(
      `✅ Received event of type "${event.type}" with ID: "${event.id}"`
    );

    // Handle the event based on type
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object;
        console.log(`💰 Checkout session ${session.id} completed`);
        // TODO: Create an order based on session data
        break;
      }
      case "payment_intent.succeeded": {
        const paymentIntent = event.data.object;
        console.log(`💰 PaymentIntent ${paymentIntent.id} succeeded`);
        // TODO: Update the order with payment intent data
        break;
      }
      default: {
        console.log(`❌ Unhandled event type "${event.type}"`);
        break;
      }
    }

    return res.status(200).json({ received: true });
  }
);

module.exports = app;
