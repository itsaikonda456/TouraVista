import express from "express";
import HomeDestination from "../models/HomeDestination.js";

const router = express.Router();

// Fetch all home destinations
router.get("/", async (req, res) => {
  try {
    const destinations = await HomeDestination.find();
    res.status(200).json(destinations);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch home destinations", error: err.message });
  }
});

// Add a new home destination (for admin panel)
router.post("/", async (req, res) => {
  const { name, description, image, location, price } = req.body;

  try {
    const newDestination = new HomeDestination({
      name,
      description,
      image,
      location,
      price,
    });

    await newDestination.save();
    res.status(201).json({ message: "Destination added successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Failed to add destination", error: err.message });
  }
});

export default router;
