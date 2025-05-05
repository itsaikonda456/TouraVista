import mongoose from 'mongoose';

const PackageSchema = new mongoose.Schema({
  name: String,
  price: Number, // Changed from String to Number for better handling of prices
  image: String,
  includes: [String],
});

export default mongoose.model('Package', PackageSchema);
