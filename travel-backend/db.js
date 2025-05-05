import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Connect to the 'TravelEase' database (no need to specify collections here)
    await mongoose.connect('mongodb://localhost:27017/TravelEase', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1); // Exit process if the connection fails
  }
};

export default connectDB;
