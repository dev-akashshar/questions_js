// Q40: Update a student's marks using updateOne().

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
