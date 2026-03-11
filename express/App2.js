import express from 'express';

const app = express();

app.use(express.json()); // In order for express to parse the JSON data

const port = 3000;
const students = [];

app.post("/add", (req, res) => {

    console.log(req.body);

    // validation check
    if(!req.body.id || !req.body.full_name || !req.body.email) {

        res.status(400).send('All fields are required');

    } else {
        const {id, full_name, email } = req.body; // Ensure only these fields are stored

        const newStudent = {id, full_name, email};

        students.push(newStudent); // Store data

        res.status(201).send(`${newStudent.full_name} added successfully`);
    }
});

app.get("/list", (req, res) => {

    res.send(students); // get data
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});