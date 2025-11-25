// travel-backend/server.js

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import session from "express-session";
import passport from "passport";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";

// ===== Load Environment Variables =====
dotenv.config({ path: "../.env" }); // Load .env from project root

// ===== Initialize App =====
const app = express();

// ===== Middlewares =====
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// ===== MongoDB Connection =====
mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/TravelEase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ===== Session Configuration =====
app.use(
  session({
    secret: process.env.SESSION_SECRET || "defaultSecret",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 24 * 60 * 60 * 1000 }, // 1 day
  })
);

// ===== Initialize Passport =====
app.use(passport.initialize());
app.use(passport.session());

// ===== Import Models =====
import Destination from "./models/Destination.js";
import Booking from "./models/Booking.js";
import User from "./models/User.js";

// ===== Import Routes =====
import packageRoutes from "./routes/Packages.js";
import homeDestinationsRoute from "./routes/homeDestinations.js";
import userRoutes from "./routes/userRoutes.js";

// ===== Passport Serialize/Deserialize =====
passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

// ===== ROUTES =====
app.use("/api/users", userRoutes);
app.use("/api/packages", packageRoutes);
app.use("/api/home", homeDestinationsRoute);

// Fetch all destinations
app.get("/api/destinations", async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ===== Email (Nodemailer) =====
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

// Send booking confirmation email
app.post("/send-email", async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    destination,
    checkIn,
    checkOut,
    travelers,
    totalCost,
  } = req.body;

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Booking Confirmation - Your Trip is Confirmed!",
    html: `
      <h2>Booking Confirmation</h2>
      <p>Dear ${firstName} ${lastName},</p>
      <p>Your trip has been successfully booked!</p>
      <h3>Booking Details:</h3>
      <ul>
        <li><b>Destination:</b> ${destination}</li>
        <li><b>Check-in:</b> ${new Date(checkIn).toDateString()}</li>
        <li><b>Check-out:</b> ${new Date(checkOut).toDateString()}</li>
        <li><b>Travelers:</b> ${travelers}</li>
        <li><b>Total Cost:</b> $${Number(totalCost).toFixed(2)}</li>
      </ul>
      <p>Thank you for booking with TravelEase!</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to send email", details: error.message });
  }
});

// ===== Save Logged-in User =====
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = new User({ email, password });
    await user.save();
    res.status(200).json({ message: "User stored successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to store user", error: error.message });
  }
});

// ===== Google OAuth =====
app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

app.get(
  "/oauth2/redirect/google",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("/");
  }
);

// ===== Logout =====
app.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Logout failed", error: err.message });
    }
    res.redirect("/");
  });
});

// ===== Serve Frontend Build =====
// (✅ Corrected build path since dist/ is in project root)

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// IMPORTANT: Build is one folder up (../dist)
const buildPath = path.join(__dirname, "../dist");
app.use(express.static(buildPath));

// Fallback route for React Router
app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

// ===== Start Server =====
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
