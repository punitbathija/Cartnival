const mongoose = require("mongoose");

const connectWithDB = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.MONGO_DB_LOCAL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("DB successfully connected"))
    .catch((error) => console.log("connection failed", error));
};

module.exports = connectWithDB;
