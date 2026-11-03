// Q28: Export a function from one file and use it in another.

// In mathUtils.js:
// const multiply = (a, b) => a * b;
// module.exports = { multiply };

const { multiply } = require("./mathUtils");

const result = multiply(6, 7);
console.log(`Exported multiply(6, 7) Result = ${result}`);
