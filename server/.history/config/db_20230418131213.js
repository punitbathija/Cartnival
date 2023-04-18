const mongoose = require("mongoose");

const connectWithDb = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB Connected Successfully");
    })
    .catch((error) => {
      console.log("Connection Failed");
      console.log(error);
      process.exit(1);
    });
};
module.exports = connectWithDb;
