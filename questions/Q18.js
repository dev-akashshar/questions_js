// Q18: Use fetch() to get JSON data from an API and log it.

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => res.json())
  .then((data) => console.log("JSON Data:", data))
  .catch((err) => console.error("Error:", err.message));
