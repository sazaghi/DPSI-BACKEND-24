var express = require('express');
var router = express.Router();
// Data produk yang akan kita tampilkan
let products = [
 { id: 1, name: 'Product A', price: 100 },
 { id: 2, name: 'Product B', price: 150 },
 { id: 3, name: 'Product C', price: 200 }
];
// Rute GET untuk mendapatkan daftar produk
router.get('/', function(req, res, next) {
 res.json(products);
});
router.post('/', function(req, res, next) {
    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price
    };
    products.push(newProduct);
    res.status(201).json({ message: 'Product added successfully', product:
newProduct });
});
module.exports = router;