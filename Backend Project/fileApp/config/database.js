const mongoose = require("mongoose");
require("dotenv").config();

exports.dbConnect = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("DB Connection Successful");
    })
    .catch((err) => {
      console.log("Error in DB Connection");
      console.error(err);
      process.exit(1);
    });
};
