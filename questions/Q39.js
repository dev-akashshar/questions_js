// Q39: Use find() to retrieve all documents from a collection.
// Objective: Retrieve all student documents from a MongoDB collection.
// Explanation: find() returns documents from the students collection that match the query. The same operation can be executed in mongosh or through Mongoose. Concept: MongoDB queries.


/*
MongoDB Shell Command:
db.students.find();
*/

// In Node.js / Mongoose:
// const students = await Student.find({});

console.log("MongoDB Query: db.students.find({})");
console.log("Explanation  : find() retrieves all documents matching the filter (empty {} returns all).");
