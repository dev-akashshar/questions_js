// Q19: Use axios to make a GET request and display the response.

const axios = require("axios");

axios
  .get("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => console.log("Axios Response Data:", res.data))
  .catch((err) => console.error("Axios Error:", err.message));
