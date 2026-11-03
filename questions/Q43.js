// Q43: Build a query to find students who scored between 60 and 90.
// Objective: Find students whose marks are between 60 and 90.
// Explanation: $gte and $lte define inclusive lower and upper limits for marks. MongoDB returns documents satisfying both conditions. Concepts: range queries and comparison operators.


/*
MongoDB Shell Command:
db.students.find({ marks: { $gte: 60, $lte: 90 } });
*/

// Node.js query object with $gte and $lte operators
const query = { marks: { $gte: 60, $lte: 90 } };

console.log("Query Syntax : db.students.find(query)");
console.log("Query Filter :", query);
console.log("Explanation  : $gte (>= 60) and $lte (<= 90) filters range between 60 and 90.");
