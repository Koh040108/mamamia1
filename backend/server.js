import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

// App Config
const app = express();
const port = process.env.PORT || 4000;

// Connect to DB and Cloudinary
connectDB();
connectCloudinary();

// Middleware
app.use(express.json());
app.use(cors());

// API Routes
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/orders', orderRouter);

// Home Route
app.get('/', (req, res) => {
  res.send('API Working');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('Shutting down gracefully...');
  await mongoose.disconnect();
  console.log('Disconnected from MongoDB');
  process.exit(0);
});

// Start Server
app.listen(port, () => console.log(`Server started on PORT : ${port}`));
