// Q14: Handle an error using try-catch when parsing invalid JSON.

const invalidJson = '{"name": "Akash", age: 22}'; // Invalid: keys must be double-quoted

try {
  const data = JSON.parse(invalidJson);
  console.log("Parsed Data:", data);
} catch (error) {
  console.log("Error caught successfully:", error.message);
}
