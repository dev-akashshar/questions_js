// Q14: Handle an error using try-catch when parsing invalid JSON.
// Objective: Handle invalid JSON without stopping the program.
// Explanation: JSON.parse() throws an error for malformed JSON, so the try-catch block handles it. The catch block displays the error message. Concepts: JSON parsing and error handling.


const invalidJson = '{"name": "Akash", age: 22}'; // Invalid: keys must be double-quoted

try {
  const data = JSON.parse(invalidJson);
  console.log("Parsed Data:", data);
} catch (error) {
  console.log("Error caught successfully:", error.message);
}
