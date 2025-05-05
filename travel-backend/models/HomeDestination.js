// models/HomeDestination.js

import mongoose from "mongoose";

const homeDestinationSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    imageUrl: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

const HomeDestination = mongoose.model(
  "HomeDestination",
  homeDestinationSchema
);

export default HomeDestination;
