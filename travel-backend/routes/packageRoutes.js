const express = require("express");
const Package = require("../models/Package");

const router = express.Router();

// Get all packages
router.get("/", async (req, res) => {
    const packages = await Package.find();
    res.json(packages);
});

// Add a package
router.post("/", async (req, res) => {
    const newPackage = new Package(req.body);
    await newPackage.save();
    res.json({ message: "Package added!" });
});

module.exports = router;
