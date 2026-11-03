// Q26: Create a custom module in Node.js and import it using require.

// In customModule.js:
// module.exports = (name) => `Hello, ${name}! Welcome to custom module.`;

const greet = require("./customModule");

console.log(greet("Akash"));
