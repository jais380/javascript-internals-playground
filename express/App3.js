import express from 'express'
import { addproduct, getproducts, getProductsById, updateProductPartial, updateProduct, deleteProduct } from './appUtils.js';

const app = express();
const port = 3001; //port

app.use(express.json()) //middleware


app.post('/add', addproduct)

app.get('/', getproducts)

app.get('/:id', getProductsById)

app.patch('/:id', updateProductPartial)

app.put('/:id', updateProduct)

app.delete('/:id', deleteProduct)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})