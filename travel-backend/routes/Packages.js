// routes/packages.js
import express from 'express';
import Package from '../models/Package.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const packages = await Package.find();
    console.log(packages); // Log data to ensure you're getting results
    res.json(packages);
  } catch (err) {
    console.error("Error fetching packages:", err);
    res.status(500).json({ error: 'Failed to fetch packages' });
  }
});

export default router;
