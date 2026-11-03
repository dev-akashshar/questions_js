// Q24: Use npm init to create a new Node project and install express.
// Objective: Initialize a Node.js project and install Express.
// Explanation: npm init -y creates a package.json file with default settings. npm install express adds Express as a project dependency. Concepts: npm and package management.


/*
Terminal Commands:
1. npm init -y
2. npm install express
*/

const express = require("express");

console.log("npm init and express setup successful!");
console.log("Express loaded:", typeof express === "function");
