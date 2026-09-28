const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {

    const student = {
        name: "Chandini",
        course: "Full Stack Development",
        week: 7
    };

    res.render("index", { student });
});

app.get("/form", (req, res) => {
    res.render("form");
});

app.post("/submit", (req, res) => {

    const name = req.body.name;
    const email = req.body.email;

    if (!name || !email) {
        return res.send(`
            <h1>Error</h1>
            <p>Name and Email are required!</p>
            <a href="/form">Go Back</a>
        `);
    }

    res.send(`
        <h1>Form Submitted Successfully</h1>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <a href="/form">Go Back</a>
    `);
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});