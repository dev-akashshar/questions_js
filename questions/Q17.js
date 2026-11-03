// Q17: Use async/await to fetch data from a public API and display it.

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
