// Q27: Debug a Node.js app using console.log() and node inspect.

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
