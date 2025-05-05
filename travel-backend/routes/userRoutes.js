import express from "express";
import User from "../models/User.js"; // ✅ default import
const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    await User.create({ email, password });
    res.status(200).send("User logged in");
  } catch (err) {
    res.status(500).send("Error logging in");
  }
});

router.post("/google-login", async (req, res) => {
  const { name, email, photo } = req.body;
  try {
    await User.create({ name, email, photo });
    res.status(200).send("Google login success");
  } catch (err) {
    res.status(500).send("Google login failed");
  }
});

export default router;
