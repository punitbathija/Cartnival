const mongoose = require("mongoose");

const connectWithDB = () => {
  // mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("DB successfully connected"))
    .catch((error) => {
      console.log("connection failed", error);
      process.exit(1);
    });
};

module.exports = connectWithDB;
const uri = process.env.MONGO_DB_URL;

mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));
