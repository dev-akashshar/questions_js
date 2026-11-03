// Q20: Convert a JavaScript object to JSON string and back using JSON.stringify() and JSON.parse().

const user = { id: 1, name: "Akash", role: "Developer" };

// 1. Convert Object to JSON String
const jsonString = JSON.stringify(user);
console.log("JSON String:", jsonString);

// 2. Convert JSON String back to JavaScript Object
const parsedObject = JSON.parse(jsonString);
console.log("Parsed Object:", parsedObject);
