// Q41: Delete a document using deleteOne() based on student ID.
// Objective: Delete a student document using its ID.
// Explanation: deleteOne() finds the matching studentId and removes one document. The same query shape works in MongoDB Shell and Mongoose. Concept: document deletion.


/*
MongoDB Shell Command:
db.students.deleteOne({ studentId: 101 });
*/

// Node.js / Mongoose query:
const filter = { studentId: 101 };

console.log("MongoDB Query: db.students.deleteOne(filter)");
console.log("Filter Criteria:", filter);
console.log("Document with studentId 101 marked for deletion.");
