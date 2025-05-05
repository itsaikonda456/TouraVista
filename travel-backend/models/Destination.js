// models/Destination.js
import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  price: String,
});

const Destination = mongoose.model("Destination", destinationSchema);

export default Destination;
