const express = require("express");
const router = express.Router();
const UserModel = require("../../models/UserModel");
const jwt = require("jsonwebtoken");

router.post("/adduser", async (req, res) => {
  try {
    const {
      token,
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      dateOfBirth,
    } = req.body;

    // Kiểm tra token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken.userId;

    const user = await UserModel.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Cập nhật thông tin cá nhân của người dùng
    user.firstName = firstName;
    user.lastName = lastName;
    user.userInfo.email = email;
    user.userInfo.phoneNumber = phoneNumber;
    user.userInfo.address = address;
    user.userInfo.dateOfBirth = dateOfBirth;

    await user.save();

    res.status(201).json({
      message: "User information added/updated successfully",
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
