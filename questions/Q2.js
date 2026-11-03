// Q2: Declare variables using var, let, and const. Show how scope differs inside a block.

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
