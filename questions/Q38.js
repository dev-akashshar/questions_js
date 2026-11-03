// Q38: Insert multiple student documents into a collection.

/*
MongoDB Shell Command:
db.students.insertMany([
  { name: "Rahul", rollNo: 101, marks: 85 },
  { name: "Priya", rollNo: 102, marks: 92 },
  { name: "Amit",  rollNo: 103, marks: 78 }
]);
*/

const studentDocuments = [
  { name: "Rahul", rollNo: 101, marks: 85 },
  { name: "Priya", rollNo: 102, marks: 92 },
  { name: "Amit",  rollNo: 103, marks: 78 }
];

console.log("Documents to insert into 'students' collection:");
console.log(studentDocuments);
console.log("Query: db.students.insertMany(studentDocuments)");
