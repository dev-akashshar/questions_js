// Q21: Create a simple React component that displays your name.

/*
// React Component (ES6 Arrow Function):
import React from "react";

const DisplayName = ({ name = "Akash Sharma" }) => {
  return <h1>Hello, my name is {name}!</h1>;
};

export default DisplayName;
*/

// Demonstration output:
const DisplayName = ({ name = "Akash Sharma" }) => `Hello, my name is ${name}!`;

console.log("React Component Output:");
console.log(DisplayName({ name: "Akash Sharma" }));
