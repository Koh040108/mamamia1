const express = require('express');
const Product = require('../models/Product');

const router = express.Router();

// Get all products
router.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new product
router.post('/products', async (req, res) => {
    const { name, price, image, description, category } = req.body;

    const newProduct = new Product({
        name,
        price,
        image,
        description,
        category,
    });

    try {
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
