// Q42: Use query operators to find students with marks greater than 80.

/*
MongoDB Shell Command:
db.students.find({ marks: { $gt: 80 } });
*/

// Node.js query object with $gt operator
const query = { marks: { $gt: 80 } };

console.log("Query Syntax : db.students.find(query)");
console.log("Query Filter :", query);
console.log("Explanation  : $gt selects documents where marks field > 80.");
