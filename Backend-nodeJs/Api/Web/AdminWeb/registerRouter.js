const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const AdminModel = require("../../../models/AdminModel");

router.post("/", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if admin with the same username already exists
    const existingAdmin = await AdminModel.findOne({ username });
    if (existingAdmin) {
      return res
        .status(400)
        .json({ message: "Admin with this username already exists" });
    }

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);

    // Use salt to hash the password
    const hashedPassword = await bcrypt.hash(password, salt);

    const admin = new AdminModel({
      username,
      password: hashedPassword,
    });

    await admin.save();

    res.status(201).json({ message: "Admin registered successfully" });
  } catch (error) {
    console.error("Error registering admin", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
