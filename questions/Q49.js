// Q49: Use indexes to optimize search on the title field.

const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, index: true }, // Index defined directly in schema
  author: String,
  price: Number
});

// Explicit index creation syntax:
bookSchema.index({ title: 1 }); // 1 for ascending index

console.log("Index defined on 'title' field to optimize search queries.");
console.log("Schema Indexes:", bookSchema.indexes());
