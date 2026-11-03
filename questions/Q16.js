// Q16: Convert a callback-based function into a Promise-based one.

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
