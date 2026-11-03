// Q47: Add a modifier to make the book title uppercase before saving.

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
