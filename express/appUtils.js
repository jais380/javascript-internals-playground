const products = [];
let count = 1;

export const addProduct = (req, res) => {
    const {productName, price, quantity, inStock} = req.body; // select only relevant fields

    const data = {productName, price, quantity, inStock}; // assing the values to data variable

    const product = {id: count++, ...data}; // apply dynamic id generation

    products.push(product); // add to in memory storage

    res.status(201).json({product})
}

export const getProducts = (req, res) => {
    res.status(200).json({"data": products})
}

export const getProductsById = (req, res) => {

    const id = parseInt(req.params.id); // get the id as integer

    const product = products.find(s => s.id === id); // find the object

    if (!product) {
        res.status(404).send("Product not found");
    }

    res.status(200).json({data: product});
}


export const updateProductPartial = (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(s => s.id === id);

    if (!product) {
        return res.status(404).send("Product not found"); // Added return
    }

    // Merge only provided fields
    Object.assign(product, req.body);

    res.status(200).json({data: product});
}


export const updateProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const index = products.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).send("Product not found"); // Added return
    }

    // Replace the entire object
    products[index] = {
        id: id,
        full_name: req.body.full_name,
        email: req.body.email
    };

    res.status(200).json({data: products[index]});
}


export const deleteProduct = (req, res) => {
    const id = parseInt(req.params.id); // get the id as integer

    // Remove the product from the array
    const index = products.findIndex(s => s.id === id);
    if (index !== -1) {
        products.splice(index, 1);
        res.status(200).json({message: `Product with id ${id} deleted successfully`});
    } else {
        res.status(404).send("Product not found");
    }
}