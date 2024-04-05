const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
app.listen(port, () => {
  console.log(`App Started on port ${port}`);
});

app.get("/", (req, res) => {
  res.send(`<h1>This is Heading1</h1>`);
});

app.post("/car", (req, res) => {
  res.send("Received a post request");
});
