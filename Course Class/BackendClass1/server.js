//!Server Instantiate
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

// !Activate the server on port 3000
app.listen(3000, () => {
  console.log("Server started at port no. 3000");
});

// !Routes
app.get("/", (req, res) => {
  res.send("Hello World, How are you?");
});

app.post("/api/cars", (req, res) => {
  const { name, brand } = req.body;
  console.log(name);
  console.log(brand);
  res.send("Car submitted successfully");
});

// !Connect to mongodb by mongoose
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/myDatabase")
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((error) => {
    console.log("Received an error", error);
  });
