const express = require("express");
const Booking = require("./models/Booking"); // ❌ Remove this line

const router = express.Router();

// Get all bookings
router.get("/", async (req, res) => {
    const bookings = await Booking.find();
    res.json(bookings);
});

// Create a booking
router.post("/", async (req, res) => {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.json({ message: "Booking successful!" });
});

module.exports = router;
