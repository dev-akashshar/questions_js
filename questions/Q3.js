// Q3: Create a function that checks if a number is even or odd.
// Objective: Check whether a number is even or odd.
// Explanation: The function uses the remainder operator (%) to test divisibility by 2. A ternary operator returns the matching result. Concepts: functions, modulo, and conditional expressions.


const checkEvenOdd = (num) => (num % 2 === 0 ? "Even" : "Odd");

console.log(`4 is ${checkEvenOdd(4)}`);
console.log(`7 is ${checkEvenOdd(7)}`);
