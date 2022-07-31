// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();

const cors = require("cors");
// CORS allows my api to work. CORS helps middleware on my server
app.use(cors());
// helps convert JSON to JavaScript
app.use(express.json());

const transactionsController = require("./controllers/transactionsController.js");

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Budgeting App");
});

app.use("/transactions", transactionsController);

app.get('*', (req, res) => {
  res.status(404).json({ error: 'Page not found' });
});

// EXPORT
module.exports = app;
