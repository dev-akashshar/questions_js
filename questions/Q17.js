// Q17: Use async/await to fetch data from a public API and display it.
// Objective: Fetch and display data from a public API using async/await.
// Explanation: fetch() requests the resource, and response.json() converts it into a JavaScript object. try-catch handles network or parsing errors. Concepts: async/await, fetch(), and error handling.


const fetchApiData = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    console.log("Fetched Data:", data);
  } catch (err) {
    console.error("Fetch Error:", err.message);
  }
};

fetchApiData();
