const mongoose = require("mongoose");
const dotenv=require('dotenv')
dotenv.config();
const url=process.env.DB_URL
const connect_db = async () => {
  try {
    await mongoose.connect(url);
    console.log("Connected to Database Successfully");
  } catch (error) {
    console.log(error.stack);
  }
};

module.exports = connect_db;
