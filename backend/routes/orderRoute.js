import express from 'express';
import {
    placeOrder,
    placeOrderStripe,
    placeOrderRazorpay,
    allOrders,
    userOrders,
    updateStatus,
    verifyStripe,
    verifyRazorpay
} from '../controllers/orderController.js';
import adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/auth.js';

const orderRouter = express.Router();

// Admin Features
orderRouter.post('/list', adminAuth, allOrders);  // Admin route to get all orders
orderRouter.post('/status', adminAuth, updateStatus);  // Admin route to update status

// Payment Features
orderRouter.post('/place', authUser, placeOrder);  // Place order
orderRouter.post('/stripe', authUser, placeOrderStripe);  // Place order via Stripe
orderRouter.post('/razorpay', authUser, placeOrderRazorpay);  // Place order via Razorpay

// User Features
orderRouter.post('/userorders', authUser, userOrders);  // Get orders for the logged-in user

// Verify Payment
orderRouter.post('/verifyStripe', authUser, verifyStripe);  // Verify Stripe payment
orderRouter.post('/verifyRazorpay', authUser, verifyRazorpay);  // Verify Razorpay payment

// Default GET Route to fetch all orders (admin or authorized users only)
orderRouter.get('/', async (req, res) => {
    try {
        const orders = await Order.find();  // Fetch all orders from the DB
        res.json({ orders });
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch orders', error: error.message });
    }
});

export default orderRouter;
