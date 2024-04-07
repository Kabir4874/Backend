// !app create
const express = require("express");
const app = express();

// !PORT find
require("dotenv").config();
const PORT = process.env.PORT || 3000;

// !middleware connect
app.use(express.json());
const fileUpload = require("express-fileupload");
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);

// !db connect
require("./config/database").dbConnect();

// !cloud connect
require("./config/cloudinary").cloudinaryConnect();

// !api route mount
const Upload = require("./routes/fileUpload");
app.use("/api/v1/upload", Upload);

// !activate server
app.listen(PORT, () => {
  console.log("App is running");
});
