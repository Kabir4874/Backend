const mongoose = require("mongoose");
require("dotenv").config();

const connectWithDb = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
      console.log("DB Connected Successfully");
    })
    .catch((err) => {
      console.log("DB Facing Connection Problem");
      console.error(err);
      process.exit(1);
    });
};
module.exports = connectWithDb;
