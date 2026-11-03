// Q18: Use fetch() to get JSON data from an API and log it.
// Objective: Retrieve JSON data from an API using fetch().
// Explanation: fetch() returns a Promise, which is chained to parse the response and log the data. catch() handles request failures. Concepts: Promises and JSON conversion.


fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => res.json())
  .then((data) => console.log("JSON Data:", data))
  .catch((err) => console.error("Error:", err.message));
