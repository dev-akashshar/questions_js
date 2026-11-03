// Q27: Debug a Node.js app using console.log() and node inspect.
// Objective: Debug a Node.js program using console.log() and the inspector.
// Explanation: console.log() displays input and calculated values, while debugger pauses execution when Node Inspector is used. This helps examine program state step by step. Concepts: debugging and breakpoints.


// Command to inspect: node inspect questions/Q27.js

const calculateDiscount = (price, discountPercent) => {
  debugger; // Breakpoint for node inspect
  console.log(`[DEBUG] Input Price: ${price}, Discount: ${discountPercent}%`);

  const discountAmount = (price * discountPercent) / 100;
  const finalPrice = price - discountAmount;

  console.log(`[DEBUG] Final Price Calculated: ${finalPrice}`);
  return finalPrice;
};

console.log("Calculated Price:", calculateDiscount(500, 20));
