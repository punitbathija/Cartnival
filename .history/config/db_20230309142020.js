const mongoose = require("mongoose");
const connectWithDB = () => {
  mongoose.connect(process.env.MONGO_DB_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(
    console.log("Db successfully connected");
  )
};
