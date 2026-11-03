// Q47: Add a modifier to make the book title uppercase before saving.
// Objective: Convert a book title to uppercase before saving it.
// Explanation: A Mongoose setter transforms the title value whenever it is assigned. The document is saved with the normalized uppercase title. Concept: Mongoose schema modifiers.


const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    uppercase: true // Built-in modifier converts string to uppercase
  },
  author: String,
  price: Number
});

// Pre-save middleware alternative
bookSchema.pre("save", function (next) {
  this.title = this.title.toUpperCase();
  next();
});

console.log("Modifier configured: Book title will be converted to UPPERCASE before saving.");
