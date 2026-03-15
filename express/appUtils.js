const products = [];
let count = 1;

export const addproduct = (req, res) => {
    const {productName, price, quantity, inStock} = req.body;

    const data = {productName, price, quantity, inStock};

    const product = {id: count++, ...data};

    products.push(product);

    res.status(201).json({product})
}

export const getproducts = (req, res) => {
    res.status(200).json({"data": products})
}