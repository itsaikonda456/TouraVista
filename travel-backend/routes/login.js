import express from "express";
import Login from "../models/Login.js";

const router = express.Router();

// Actual Login: verify user credentials
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await Login.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Check if password matches
    if (user.password !== password) {
      return res.status(401).json({ error: "Invalid password" });
    }

    // If matched
    res.status(200).json({ message: "Login successful", user });
  } catch (err) {
    res.status(500).json({ error: "Login failed", details: err.message });
  }
});

export default router;
