// Q41: Delete a document using deleteOne() based on student ID.

/*
MongoDB Shell Command:
db.students.deleteOne({ studentId: 101 });
*/

// Node.js / Mongoose query:
const filter = { studentId: 101 };

console.log("MongoDB Query: db.students.deleteOne(filter)");
console.log("Filter Criteria:", filter);
console.log("Document with studentId 101 marked for deletion.");
