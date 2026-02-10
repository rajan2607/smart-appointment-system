const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const User = require("../models/User");
const auth = require("../middleware/authMiddleware");
const allowRoles = require("../middleware/roleMiddleware");


// ============================
// OWNER → CREATE STAFF
// ============================
router.post("/", auth, allowRoles(["OWNER"]), async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const exists = await User.findOne({ email });
    if (exists)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const staff = await User.create({
      name,
      email,
      password: hashedPassword,
      role: "STAFF",
    });

    res.status(201).json({
      message: "Staff created successfully",
      staff,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// ============================
// OWNER → GET STAFF LIST
// ============================
router.get("/", auth, allowRoles(["OWNER"]), async (req, res) => {
  try {
    const staff = await User.find({ role: "STAFF" }).select("-password");
    res.json(staff);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
