// routes/destinations.js
import express from "express";
import Destination from "../models/Destination.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const destinations = await Destination.find();
  res.json(destinations);
});

export default router;
