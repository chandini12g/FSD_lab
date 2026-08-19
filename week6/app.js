const express = require("express");

const app = express();

const port = 3000;

app.use(express.json());

const logger = (req, res, next) => {
    console.log(
        `${new Date().toLocaleString()} - ${req.method} ${req.url}`
    );

    next();
};

app.use(logger);

let students = [
    { id: 1, name: "Chandini", age: 20 },
    { id: 2, name: "Rahul", age: 21 }
];

app.get("/students", (req, res) => {
    res.json(students);
});

app.post("/students", (req, res) => {
    const student = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age
    };

    students.push(student);

    res.status(201).json(student);
});

app.put("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    student.name = req.body.name;
    student.age = req.body.age;

    res.json(student);
});

app.delete("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    students.splice(index, 1);

    res.json({
        message: "Student deleted successfully"
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});