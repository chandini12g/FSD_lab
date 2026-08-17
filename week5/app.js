const express = require("express");

const app = express();

const port = 3000;

// i) Basic route
app.get("/", (req, res) => {
    res.send("Welcome to Express Server");
});

// ii) About route
app.get("/about", (req, res) => {
    res.send("This is About Page");
});

// iii) Route parameter
app.get("/student/:name", (req, res) => {
    res.send(`Hello ${req.params.name}`);
});

// iv) Query parameter
app.get("/search", (req, res) => {
    res.send(`You searched for ${req.query.name}`);
});

// v) Dynamic URL
app.get("/product/:id", (req, res) => {
    res.send(`Product ID is ${req.params.id}`);
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});