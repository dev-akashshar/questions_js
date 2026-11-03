// Q15: Create a Promise that resolves after 2 seconds and logs a message.
// Objective: Create a Promise that resolves after two seconds.
// Explanation: setTimeout() delays the resolve() call, changing the Promise to a fulfilled state. then() receives and logs the resolved message. Concepts: Promise and asynchronous timing.


const delayPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise resolved after 2 seconds!");
  }, 2000);
});

delayPromise.then((message) => console.log(message));
