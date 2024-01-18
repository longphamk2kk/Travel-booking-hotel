const express = require('express');
const bcrypt = require('bcrypt');
const UserModel = require('../../models/UserModel'); 

const router = express.Router();

router.post('/reset-password', async (req, res) => {
  const { username, newPassword } = req.body;

  try {
    const user = await UserModel.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: 'Người dùng không tồn tại' });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: 'Mật khẩu đã được thay đổi thành công' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Đã xảy ra lỗi' });
  }
});

module.exports = router;
