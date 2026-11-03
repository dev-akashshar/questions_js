// Q22: Use useState to toggle between two messages on button click.

/*
// React Component:
import React, { useState } from "react";

const ToggleMessage = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div>
      <p>{isToggled ? "Message Two: Goodbye!" : "Message One: Welcome!"}</p>
      <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
    </div>
  );
};
*/

// Simulated state logic:
let isToggled = false;
const getMessage = () => (isToggled ? "Message Two: Goodbye!" : "Message One: Welcome!");

console.log("Initial Message :", getMessage());
isToggled = !isToggled; // Button click
console.log("After Click     :", getMessage());
