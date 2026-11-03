// Q45: Define a Mongoose schema for a Book with title, author, and price.

const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true }
});

console.log("Book Schema Defined Successfully.");
console.log("Schema Fields:", Object.keys(bookSchema.paths));
