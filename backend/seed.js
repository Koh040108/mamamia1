const mongoose = require('mongoose');
const Product = require('./models/Product'); // Ensure this path points to your Product model

// MongoDB connection URI
const MONGO_URI = 'mongodb://localhost:27017/ecommerce'; // Replace if using a cloud-hosted MongoDB

// Sample product data
const products = [
    { name: 'T-shirt', price: 20, category: 'Men', image: '/images/tshirt.jpg' },
    { name: 'Dress', price: 50, category: 'Women', image: '/images/dress.jpg' },
    { name: 'Shoes', price: 30, category: 'Kids', image: '/images/shoes.jpg' },
];

// Function to populate database
const seedDatabase = async () => {
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB connected');

        // Clear existing products
        await Product.deleteMany({});
        console.log('Existing products cleared');

        // Insert new products
        await Product.insertMany(products);
        console.log('Products added successfully');
        mongoose.disconnect();
        console.log('MongoDB disconnected');
    } catch (error) {
        console.error('Error seeding database:', error);
        mongoose.disconnect();
    }
};

// Run the function
seedDatabase();
