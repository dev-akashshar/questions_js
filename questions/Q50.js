// Q50: Retrieve all books priced below ₹500 using Mongoose query.

const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  price: Number
});

const Book = mongoose.model("BookQuery", bookSchema);

// Mongoose query using find() with $lt operator
const query = Book.find({ price: { $lt: 500 } });

console.log("Mongoose Query for books priced below ₹500:");
console.log("Syntax: Book.find({ price: { $lt: 500 } })");
console.log("Filter Object:", query.getQuery());
