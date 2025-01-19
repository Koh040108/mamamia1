import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected');

    // Handle connection events
    mongoose.connection.on('connected', () => {
      console.log('MongoDB is connected');
    });

    mongoose.connection.on('error', (err) => {
      console.error('MongoDB connection error:', err);
      process.exit(1); // Exit the application on error
    });

    mongoose.connection.on('disconnected', () => {
      console.log('MongoDB connection disconnected');
    });

  } catch (error) {
    console.error('Error connecting to the database', error);
    process.exit(1); // Exit the application if connection fails
  }
};

export default connectDB;
