// Q44: Connect to MongoDB using Mongoose and log success/failure.

const mongoose = require("mongoose");

const MONGO_URI = "mongodb://127.0.0.1:27017/studentDB";

mongoose
  .connect(MONGO_URI, { serverSelectionTimeoutMS: 1500 })
  .then(() => {
    console.log("MongoDB connected successfully with Mongoose!");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log("MongoDB connection failed:", err.message);
  });
