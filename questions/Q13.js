// Q13: Manipulate the DOM to change the text of a <p> tag when a button is clicked.
// Objective: Change paragraph text when a button is clicked.
// Explanation: The event handler finds the paragraph with getElementById() and updates textContent. The function is connected to the button click event. Concepts: DOM selection, events, and textContent.


// In HTML: <p id="text">Original Text</p> <button id="btn">Click Me</button>

const updateText = () => {
  const p = document.getElementById("text");
  p.textContent = "Text changed on button click!";
};

if (typeof document !== "undefined") {
  document.getElementById("btn").addEventListener("click", updateText);
} else {
  console.log("DOM script (Browser):");
  console.log('const btn = document.getElementById("btn");');
  console.log('const p = document.getElementById("text");');
  console.log('btn.addEventListener("click", () => { p.textContent = "Text changed on button click!"; });');
}
