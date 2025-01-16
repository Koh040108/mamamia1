const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/Product');
const app = express();
const port = 5000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/yourDatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('MongoDB connection error: ', err));

// API Route for fetching products
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products); // Send products as a JSON response
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
