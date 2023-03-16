require("dotenv").config();
const app = require("./app");
const connectWithDB = require("./config/db");
const cloudinary = require("cloudinary");
// Connecting to db...

connectWithDB();

app.listen(process.env.PORT, () => {
  console.log(`App is running at ${process.env.PORT}`);
});

// Configuring cloudinary to handle assets
