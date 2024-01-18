const express = require('express');
const UserModel = require('../../../models/UserModel'); 

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    // Lấy toàn bộ danh sách người dùng từ cơ sở dữ liệu
    const users = await UserModel.find();

    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Đã xảy ra lỗi' });
  }
});

module.exports = router;
