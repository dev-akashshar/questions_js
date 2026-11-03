// Q16: Convert a callback-based function into a Promise-based one.
// Objective: Convert a callback-based function into a Promise-based function.
// Explanation: The Promise wrapper calls resolve() after the callback-style work completes. This allows the operation to be used with then() or async/await. Concepts: callbacks and Promises.


// Callback-based function
const fetchCallback = (id, callback) => {
  setTimeout(() => callback(null, `Data for ID: ${id}`), 500);
};

// Converted to Promise-based function
const fetchPromise = (id) =>
  new Promise((resolve, reject) => {
    fetchCallback(id, (err, data) => (err ? reject(err) : resolve(data)));
  });

fetchPromise(101).then((result) => console.log(result));
