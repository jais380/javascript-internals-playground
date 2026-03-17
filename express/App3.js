import express from 'express'
import { addProduct, getProducts, getProductsById, updateProductPartial, updateProduct, deleteProduct } from './appUtils.js';

const app = express();
const port = 3001; //port

app.use(express.json()) //middleware

app.post('/add', addProduct)

app.get('/', getProducts)

app.get('/:id', getProductsById)

app.patch('/:id', updateProductPartial)

app.put('/:id', updateProduct)

app.delete('/:id', deleteProduct)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})