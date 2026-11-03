// Q19: Use axios to make a GET request and display the response.
// Objective: Make a GET request with Axios and display the response.
// Explanation: Axios sends the request and resolves with a response object containing data. then() handles success, while catch() handles errors. Concept: HTTP requests with Axios.


const axios = require("axios");

axios
  .get("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => console.log("Axios Response Data:", res.data))
  .catch((err) => console.error("Axios Error:", err.message));
