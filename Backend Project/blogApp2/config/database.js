const mongoose = require("mongoose");
require("dotenv").config();
DATABASE_URL = process.env.DATABASE_URL;

exports.dbConnect = () => {
  mongoose
    .connect(DATABASE_URL)
    .then(() => {
      console.log("Database Connected");
    })
    .catch((err) => {
      console.log("Error in DB Connection");
      console.error(err.message);
      process.exit(1);
    });
};
