// Q46: Create a model and insert a new book document.

const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  price: Number
});

// Create Mongoose Model
const Book = mongoose.model("Book", bookSchema);

// Create a new document instance
const newBook = new Book({
  title: "Mastering Node.js",
  author: "John Doe",
  price: 499
});

console.log("Book Model Created.");
console.log("New Document Instance:", newBook);
