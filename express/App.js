// 1. Import express and initialize app
import express from "express"
const app = express();
const port = 3000;

// 2. Define a simple route
app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

// 3. Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});