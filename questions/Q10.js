// Q10: Use filter() to extract even numbers from an array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log("Original Array:", numbers);
console.log("Even Numbers  :", evenNumbers);
