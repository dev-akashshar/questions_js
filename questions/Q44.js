// Q44: Connect to MongoDB using Mongoose and log success/failure.
// Objective: Connect a Node.js application to MongoDB with Mongoose.
// Explanation: mongoose.connect() opens the database connection using the configured URI. then() reports success and catch() reports connection failure. Concepts: Mongoose connection and Promises.


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
