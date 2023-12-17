const express = require("express");
const router = express.Router();

// Đăng xuất người dùng
router.post("/logoutuser", (req, res) => {
  // Thực hiện các thao tác đăng xuất cho người dùng
  // Ví dụ: xoá token, xoá thông tin phiên đăng nhập, ...
  res.json({ message: "User logged out successfully" });
});

module.exports = router;
