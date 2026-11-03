// Q15: Create a Promise that resolves after 2 seconds and logs a message.

const delayPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise resolved after 2 seconds!");
  }, 2000);
});

delayPromise.then((message) => console.log(message));
