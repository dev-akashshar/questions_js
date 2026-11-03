// Q20: Convert a JavaScript object to JSON string and back using JSON.stringify() and JSON.parse().
// Objective: Convert an object to JSON and convert it back to an object.
// Explanation: JSON.stringify() creates a JSON string, and JSON.parse() reconstructs the JavaScript object. This demonstrates data serialization and deserialization. Concepts: JSON.stringify() and JSON.parse().


const user = { id: 1, name: "Akash", role: "Developer" };

// 1. Convert Object to JSON String
const jsonString = JSON.stringify(user);
console.log("JSON String:", jsonString);

// 2. Convert JSON String back to JavaScript Object
const parsedObject = JSON.parse(jsonString);
console.log("Parsed Object:", parsedObject);
