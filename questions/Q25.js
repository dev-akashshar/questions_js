// Q25: Demonstrate the difference between == and === with examples.
// Objective: Compare loose equality and strict equality in JavaScript.
// Explanation: == converts types before comparing values, while === compares both value and type. The examples show why strict equality is usually safer. Concepts: equality and type coercion.


// == (Loose Equality): Compares values with type coercion
// === (Strict Equality): Compares values and types without coercion

console.log('5 == "5"         :', 5 == "5");         // true (type coerced)
console.log('5 === "5"        :', 5 === "5");        // false (different types)

console.log("0 == false       :", 0 == false);       // true
console.log("0 === false      :", 0 === false);      // false

console.log("null == undefined :", null == undefined); // true
console.log("null === undefined:", null === undefined);// false
