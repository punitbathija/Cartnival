const mongoose = require("mongoose");

const connectWithDB = () => {
  // mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.MONGO_DB_LOCAL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(console.log("DB successfully connected"))
    .catch((error) => {
      console.log("connection failed", error);
      process.exit(1);
    });
};

module.exports = connectWithDB;
