// Q12: Write a program to swap two variables using array destructuring.
// Objective: Swap two variable values without using a temporary variable.
// Explanation: Array destructuring assigns the values in reversed order in one statement. The variables exchange values safely and clearly. Concept: ES6 array destructuring.


let x = 10;
let y = 20;

console.log(`Before Swap: x = ${x}, y = ${y}`);

// Swapping using ES6 array destructuring
[x, y] = [y, x];

console.log(`After Swap : x = ${x}, y = ${y}`);
