const express = require('express');
const app = express();

//sample Data
const users = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Smith', age: 30 },
    { id: 3, name: 'Bob Johnson', age: 35 }
];
const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 }
];
const orders = [
    { id: 1, userId: 1, productId: 2, quantity: 1 },
    { id: 2, userId: 2, productId: 1, quantity: 3 },
    { id: 3, userId: 3, productId: 3, quantity: 2 }
];
const categories = [
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Clothing' },
    { id: 3, name: 'Home Appliances' }
];
const reviews = [
    { id: 1, productId: 1, rating: 4, comment: 'Great product!' },
    { id: 2, productId: 2, rating: 5, comment: 'Excellent quality!' },
    { id: 3, productId: 3, rating: 3, comment: 'Average experience.' }
];
const carts = [
    { id: 1, userId: 1, items: [{ productId: 2, quantity: 1 }] },
    { id: 2, userId: 2, items: [{ productId: 1, quantity: 3 }] },
    { id: 3, userId: 3, items: [{ productId: 3, quantity: 2 }] }
];
const payments = [
    { id: 1, orderId: 1, amount: 20 },
    { id: 2, orderId: 2, amount: 30 },
    { id: 3, orderId: 3, amount: 40 }
];

//routing....

app.get('/', (req, res) => {
    res.send('Welcome to my server');
});

app.get('/users', (req, res) => {
    res.json(users);
});
app.get('/products', (req, res) => {
    res.json(products);
});
app.get('/orders', (req, res) => {
    res.json(orders);
});
app.get('/categories', (req, res) => {
    res.json(categories);
});
app.get('/reviews', (req, res) => {
    res.json(reviews);
});
app.get('/carts', (req, res) => {
    res.json(carts);
});
app.get('/payments', (req, res) => {
    res.json(payments);
});
//start server....
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});