// registerRouter.js
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const UserModel = require("../../models/UserModel");

router.post("/", async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(req.body,'aloalo')

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);

    // Use salt to hash the password
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new UserModel({
      username,
      password: hashedPassword,
    });

    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
