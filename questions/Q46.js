// Q46: Create a model and insert a new book document.
// Objective: Create a Mongoose model and insert a book document.
// Explanation: The model is created from the Book schema and provides database operations. new Book() creates a document, and save() stores it in MongoDB. Concepts: models and document creation.


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
