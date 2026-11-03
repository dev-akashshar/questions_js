// Q9: Use map() to double each number in an array.
// Objective: Create a new array containing double the value of every number.
// Explanation: map() runs the callback for each array element and returns a new transformed array. The original array remains unchanged. Concept: map().


const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);

console.log("Original Array:", numbers);
console.log("Doubled Array :", doubled);
