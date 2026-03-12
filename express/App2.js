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

        students.push({id: count++, ...newStudent}); // Store data

        res.status(201).send(`${newStudent.full_name} added successfully`);
    }
});

app.get("/list", (req, res) => {

    res.status(200).send(students); // get data
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});