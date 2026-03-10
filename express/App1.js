import express from "express"

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const data = [
        {name: "Jude", age: "50", isActive: true, isAdmin: true},
        {name: "Damian", age: "43", isActive: true, isAdmin: false},
        {name: "Cynthia", age: "18", isActive: false, isAdmin: true},
        {name: "Roland", age: "91", isActive: false, isAdmin: false},
        {name: "Nicholas", age: "30", isActive: true, isAdmin: false}
    ];

    const messages = [];


    for (let i = 0; i < data.length; i++) {
        let message = data[i].isActive && data[i].isAdmin
                        ? `${data[i].name} is ${data[i].age}yrs old. He is the Boss!!`
                        : data[i].isActive
                            ? `${data[i].name} is ${data[i].age}yrs old. He is Active`
                            : `${data[i].name} is ${data[i].age}yrs old. He is not Active`

        messages.push(message);

    }

    res.send(messages);
})



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});