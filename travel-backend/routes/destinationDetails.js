import express from 'express';
import DestinationDetails from '../models/DestinationDetails.js';

const router = express.Router();

// GET specific destination details
router.get('/:name', async (req, res) => {
  try {
    const destination = await DestinationDetails.findOne({ name: req.params.name });
    if (!destination) {
      return res.status(404).json({ message: 'Destination not found' });
    }
    res.json(destination);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
