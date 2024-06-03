const express = require('express');
const router = express.Router();
const Product = require('../models/product'); // Impor model Product

// Endpoint untuk menambahkan produk baru
router.post('/', async (req, res, next) => {
    try {
        const { productName, supplierID, categoryID, unit, price } = req.body;
        const newProduct = await Product.create({ productName, supplierID, categoryID, unit, price });
        res.status(201).json(newProduct);
    } catch (err) {
        next(err);
    }
});

// Endpoint untuk menampilkan semua produk
router.get('/', async (req, res, next) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (err) {
        next(err);
    }
});

// Endpoint untuk menampilkan produk berdasarkan ID
router.get('/:id', async (req, res, next) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (err) {
        next(err);
    }
});

// Endpoint untuk memperbarui produk berdasarkan ID
router.put('/:id', async (req, res, next) => {
    try {
        const { categoryName, description } = req.body;
        const category = await Category.findByPk(req.params.id);
        if (category) {
            category.categoryName = categoryName;
            category.description = description;
            await category.save();
            res.json(category);
        } else {
            res.status(404).json({ message: 'Category not found' });
        }
    } catch (err) {
        next(err);
    }       
});

// Endpoint untuk menghapus produk berdasarkan ID
router.delete('/:id', async (req, res, next) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (product) {
            await product.destroy();
            res.json({ message: 'Product deleted' });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (err) {
        next(err);
    }
});

module.exports = router;