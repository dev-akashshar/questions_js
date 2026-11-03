// Q11: Create an array of objects and destructure one object to extract its properties.
// Objective: Extract properties from an object stored in an array.
// Explanation: Array destructuring selects the first student object, and object destructuring extracts its properties. This makes property access shorter and clearer. Concept: destructuring.


const students = [
  { id: 101, name: "Rahul", course: "MERN" },
  { id: 102, name: "Pooja", course: "Node.js" }
];

// Destructuring properties from the first object
const [{ id, name, course }] = students;

console.log(`ID: ${id}, Name: ${name}, Course: ${course}`);
