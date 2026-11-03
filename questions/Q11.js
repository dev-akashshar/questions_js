// Q11: Create an array of objects and destructure one object to extract its properties.

const students = [
  { id: 101, name: "Rahul", course: "MERN" },
  { id: 102, name: "Pooja", course: "Node.js" }
];

// Destructuring properties from the first object
const [{ id, name, course }] = students;

console.log(`ID: ${id}, Name: ${name}, Course: ${course}`);
