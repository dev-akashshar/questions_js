// Q28: Export a function from one file and use it in another.
// Objective: Export a utility function and use it in another file.
// Explanation: The utility file exports multiply, and destructuring with require() imports that function. The imported function is called with two values. Concepts: CommonJS exports and imports.


// In mathUtils.js:
// const multiply = (a, b) => a * b;
// module.exports = { multiply };

const { multiply } = require("./mathUtils");

const result = multiply(6, 7);
console.log(`Exported multiply(6, 7) Result = ${result}`);
