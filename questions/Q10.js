// Q10: Use filter() to extract even numbers from an array.
// Objective: Extract all even numbers from an array.
// Explanation: filter() keeps only values for which the modulo-2 condition is true. It returns a new array without changing the original. Concept: filter().


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log("Original Array:", numbers);
console.log("Even Numbers  :", evenNumbers);
