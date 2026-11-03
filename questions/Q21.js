// Q21: Create a simple React component that displays your name.
// Objective: Create a React component that displays a person's name.
// Explanation: The component receives name through props and renders it inside an h1 element. A default value is used when no name is provided. Concepts: React components, props, and JSX.


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
