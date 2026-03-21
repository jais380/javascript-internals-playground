import express from 'express'

const app = express();
const students = [];
const port = 3001;
let count = 1;

// middleware
app.use(express.json())

// CRUD
app.post("/add", (req, res) => {
    const { full_name, email, age} = req.body;

    // check if data missing
    if (!full_name || !email || !age){

        // return stops javascript from continuing
        return res.status(400).send("Incomplete fields");

    }

    const student = {full_name, email, age};

    // adds student to students array
    students.push({id: count++, ...student})

    res.status(201).json({message: "Student created successfully!"})
})

//R - RETRIEVE OR READ OR GET
app.get("/", (req, res) => {
    res.status(200).json({data: students})
})


app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`)
})