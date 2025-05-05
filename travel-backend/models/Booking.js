const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  googleId: { type: String, unique: true },
  name: String,
  email: String,
  provider: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', bookingSchema);
