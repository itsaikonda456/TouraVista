import mongoose from 'mongoose';

const destinationDetailSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  title: String,
  description: String,
  highlights: [String],
  price: String,
  duration: String,
  images: [String]
});

const DestinationDetails = mongoose.model('DestinationDetails', destinationDetailSchema);

export default DestinationDetails;
