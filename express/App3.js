import express from 'express'
import { addproduct, getproducts } from './appUtils.js';

const app = express();
const port = 3001;

app.use(express.json()) //middleware

app.post('/add', addproduct)

app.get('/', getproducts)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})