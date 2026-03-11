import express from 'express';

const app = express();

app.use(express.json());

const port = 3000;
const students = [];


app.post("/add", (req, res) => {

    console.log(req.body);

    if(!req.body.id || !req.body.full_name || !req.body.email) {

        res.status(400).send('All fields are required');

    } else {
        const {id, full_name, email } = req.body;

        const newStudent = {id, full_name, email};

        students.push(newStudent);
    }
});


app.get("/list", (req, res) => {

    res.send(students);
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});