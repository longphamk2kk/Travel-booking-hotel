const express = require("express");
const router = express.Router();

// Đăng xuất quản trị viên
router.post("/logoutadmin", (req, res) => {
  // Thực hiện các thao tác đăng xuất cho quản trị viên
  // Ví dụ: xoá token, xoá thông tin phiên đăng nhập, ...
  res.json({ message: "Admin logged out successfully" });
});

module.exports = router;
