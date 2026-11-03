// Q2: Declare variables using var, let, and const. Show how scope differs inside a block.
// Objective: Understand the scope differences between var, let, and const.
// Explanation: var is function-scoped, while let and const are block-scoped. The try-catch blocks show why block variables cannot be accessed outside their block. Concepts: scope and declarations.


{
  var a = "var inside block";
  let b = "let inside block";
  const c = "const inside block";
}

console.log(a); // Accessible: var is not block-scoped

try {
  console.log(b);
} catch (err) {
  console.log("b is not accessible outside block (let is block-scoped)");
}

try {
  console.log(c);
} catch (err) {
  console.log("c is not accessible outside block (const is block-scoped)");
}
