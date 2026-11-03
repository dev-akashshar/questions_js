// Q48: Use a virtual field to calculate discounted price.
// Objective: Calculate a discounted book price with a Mongoose virtual field.
// Explanation: The virtual getter calculates a value from the stored price without adding a database field. It returns the price after applying the discount. Concept: Mongoose virtuals.


const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  price: Number
});

// Virtual field to calculate 10% discounted price
bookSchema.virtual("discountedPrice").get(function () {
  return this.price * 0.9;
});

const BookDiscount = mongoose.model("BookDiscount", bookSchema);
const book = new BookDiscount({ title: "MERN Stack Guide", price: 500 });

console.log(`Original Price  : ₹${book.price}`);
console.log(`Discounted Price: ₹${book.discountedPrice} (calculated via virtual field)`);
