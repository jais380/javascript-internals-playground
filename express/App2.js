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

        res.status(201).json({ "message": `${newStudent.full_name} added successfully` });
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

    res.status(200).json(student);
});

// PATCH: Partial Update
app.patch("/list/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).send("Student not found"); // Added return
    }

    // Merge only provided fields
    Object.assign(student, req.body);

    res.status(200).json(student);
});


app.put("/list/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).send("Student not found"); // Added return
    }

    // Replace the entire object
    students[index] = {
        id: id,
        full_name: req.body.full_name,
        email: req.body.email
    };

    res.status(200).json(students[index]);
});


app.delete("/list/:id", (req, res) => {
    const id = parseInt(req.params.id); // get the id as integer

    // Remove the student from the array
    const index = students.findIndex(s => s.id === id);
    if (index !== -1) {
        students.splice(index, 1);
        res.status(200).json(`Student with id ${id} deleted successfully`);
    } else {
        res.status(404).send("Student not found");
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});