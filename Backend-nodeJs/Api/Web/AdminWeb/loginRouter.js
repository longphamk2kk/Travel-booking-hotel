const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const AdminModel = require("../../../models/AdminModel");

router.post("/", async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await AdminModel.findOne({ username });

    if (!admin) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const token = jwt.sign({ adminId: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (error) {
    console.error("Error logging in", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
