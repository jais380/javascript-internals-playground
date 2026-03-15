const products = [];
let count = 1;

export const addproduct = (req, res) => {
    const {productName, price, quantity, inStock} = req.body; // select only relevant fields

    const data = {productName, price, quantity, inStock}; // assing the values to data variable

    const product = {id: count++, ...data}; // apply dynamic id generation

    products.push(product); // add to in memory storage

    res.status(201).json({product})
}

export const getproducts = (req, res) => {
    res.status(200).json({"data": products})
}