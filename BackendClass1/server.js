const express = require("express");

const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.listen(5000, () => {
  console.log("Server Started at port no. 5000");
});

app.get("/", (request, response) => {
  response.send("Hello World");
});

app.post("/api/cars", (request, response) => {
  const { name, brand } = request.body;
  console.log(name);
  console.log(brand);
  response.send("Car Submitted Successfully");
});

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/myDatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((error) => {
    console.log("Received an error");
  });
