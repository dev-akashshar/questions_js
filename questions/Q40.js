// Q40: Update a student's marks using updateOne().
// Objective: Update a student's marks in MongoDB.
// Explanation: updateOne() locates the document using rollNo and $set changes only the marks field. The operation updates the first matching document. Concepts: updateOne() and the $set operator.


/*
MongoDB Shell Command:
db.students.updateOne(
  { rollNo: 101 },
  { $set: { marks: 95 } }
);
*/

const filter = { rollNo: 101 };
const updateDoc = { $set: { marks: 95 } };

console.log("MongoDB Query: db.students.updateOne(filter, updateDoc)");
console.log("Filter Criteria:", filter);
console.log("Update Payload  :", updateDoc);
