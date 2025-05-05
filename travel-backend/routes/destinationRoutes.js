const express = require("express");
const router = express.Router();
const Destination = require("../models/Destination");

// Fetch all destinations
router.get("/", async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Add a new destination
router.post("/", async (req, res) => {
  try {
    const newDestination = new Destination(req.body);
    await newDestination.save();
    res.json(newDestination);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
