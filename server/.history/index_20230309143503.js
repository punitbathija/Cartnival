require("dotenv").config();
const app = require("./app");
const connectWithDB = require("./config/db");

// Connecting to db...

connectWithDB();

app.listen(process.env.PORT, () => {
  console.log(`App is running at ${process.env.PORT}`);
});

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});
