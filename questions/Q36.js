// Q36: Use express.Router() to modularize routes.
// Objective: Organize Express routes with express.Router().
// Explanation: Router groups related routes into a modular object that can be mounted on the main app. This keeps route definitions easier to maintain. Concept: modular routing.


const express = require("express");
const app = express();
const userRouter = express.Router();

// Define modular routes
userRouter.get("/profile", (req, res) => res.send("User Profile Page"));
userRouter.get("/settings", (req, res) => res.send("User Settings Page"));

// Mount the router under base path '/user'
app.use("/user", userRouter);

console.log("express.Router() mounted on '/user' (/profile, /settings).");
