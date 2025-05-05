import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oidc';
import dotenv from 'dotenv';
dotenv.config();

// Replace with actual Mongoose model
import Booking from '../models/Booking.js';

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/oauth2/redirect/google',
  scope: ['profile', 'email']
}, async function verify(issuer, profile, cb) {
  try {
    const existingUser = await Booking.findOne({ googleId: profile.id });
    if (existingUser) return cb(null, existingUser);

    const newUser = new Booking({
      googleId: profile.id,
      name: profile.displayName,
      email: profile.emails?.[0]?.value || '',
      provider: issuer
    });

    await newUser.save();
    return cb(null, newUser);
  } catch (err) {
    return cb(err);
  }
}));
