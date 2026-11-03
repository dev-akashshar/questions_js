// Q37: Install MongoDB and create a database named studentDB.
// Objective: Install MongoDB and create a database named studentDB.
// Explanation: mongosh opens the MongoDB shell, and use studentDB selects or creates the database context. MongoDB creates the database when data is first stored. Concept: MongoDB database selection.


/*
MongoDB Shell (mongosh) Commands:
1. mongosh
2. use studentDB
*/

// Node.js connection string representation:
const dbName = "studentDB";
const mongoURI = `mongodb://127.0.0.1:27017/${dbName}`;

console.log("MongoDB Database Name:", dbName);
console.log("Connection URI       :", mongoURI);
console.log("Shell Command        : use studentDB");
