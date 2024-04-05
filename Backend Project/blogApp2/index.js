const express = require("express");
require("dotenv").config();
const app = express();

PORT = process.env.PORT || 4000;
app.use(express.json());

app.listen(PORT, () => {
  console.log(`App is started at port no. ${PORT}`);
});

const dbConnect = require("./config/database");
dbConnect();

app.get("/", (req, res) => {
  res.send(`<h1>This is homepage</h1>`);
});
