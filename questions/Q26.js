// Q26: Create a custom module in Node.js and import it using require.
// Objective: Create and use a custom Node.js module.
// Explanation: The custom module exports a greeting function, and require() imports it into the current file. The imported function is then called with a name. Concept: CommonJS modules.


// In customModule.js:
// module.exports = (name) => `Hello, ${name}! Welcome to custom module.`;

const greet = require("./customModule");

console.log(greet("Akash"));
