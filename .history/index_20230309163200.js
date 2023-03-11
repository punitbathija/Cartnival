require("dotenv").config();
const app = require("./app");
const connectWithDB = require("./config/db");
const cloudinary = require("cloudinary");

// Configuring cloudinary to handle assets

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Connecting to db...

connectWithDB();

app.listen(process.env.PORT, () => {
  console.log(`App is running at ${process.env.PORT}`);
});
