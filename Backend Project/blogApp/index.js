const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("App is running successfully");
});

app.get("/", (req, res) => {
  res.send(`<h1>This is homepage</h1>`);
});
