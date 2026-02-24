const products = [
    {name: 'Jordan sneakers', price: 100, instock: true},
    {name: 'Rollerskates', price: 135, instock: false},
    {name: 'Jungle boots', price: 90, instock: false},
    {name: 'Comabat boots', price: 85, instock: true},
    {name: 'Slippers', price: 12, instock: false},
    {name: 'Sandals', price: 45, instock: true},
    {name: 'Ice skates', price: 154, instock: true}
]

const cart = products.filter((item) => item.instock === true);

console.log(cart);

const taxedProducts = cart.map((item) => item.price + (item.price * 0.1));

console.log(`Prices of cart items with 10% value added tax -> ${taxedProducts}`);

const finalPrice = taxedProducts.reduce((acc, cur) => acc + cur, 0);

console.log(`Total price of items -> ${finalPrice}`);