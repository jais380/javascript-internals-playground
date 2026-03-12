import express from 'express';

const app = express();

app.use(express.json()); // In order for express to parse the JSON data

const port = 3000;
const students = [];
let count = 1;

app.post("/add", (req, res) => {

    console.log(req.body);

    // validation check
    if(!req.body.full_name || !req.body.email) {

        res.status(400).send('All fields are required');

    } else {
        const {full_name, email } = req.body; // Ensure only these fields are stored

        const newStudent = {full_name, email};

        // For automatic id creation
        students.push({id: count++, ...newStudent}); // Store data

        res.status(201).send(`${newStudent.full_name} added successfully`);
    }
});

app.get("/list", (req, res) => {

    res.status(200).send(students); // get data
});

app.get("/list/:id", (req, res) => {

    const id = parseInt(req.params.id); // get the id as integer

    const student = students.find(s => s.id === id); // find the object

    if (!student) {
        res.status(404).send("Student not found");
    }

    res.status(200).send(student);
});

app.patch("/list/:id", (req, res) => {
    const id = parseInt(req.params.id); // get the id as integer

    const student = students.find(s => s.id === id); // find the object

    if (!student) {
        res.status(404).send("Student not found");
    }

    // Update only provided field
    Object.assign(student, req.body); // Assign the request body to the
                                      // relevant object field

    res.status(200).send(student);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});