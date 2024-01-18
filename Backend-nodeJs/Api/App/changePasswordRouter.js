const express = require('express');
const bcrypt = require('bcrypt');
const UserModel = require('../../models/UserModel'); // Thay đổi đường dẫn đến model của bạn

const router = express.Router();

router.put('/:username', async (req, res) => {
  const { username } = req.params;
  const { currentPassword, newPassword } = req.body;
  console.log(req.body,'alo');

  try {
    // Tìm người dùng theo tên người dùng
    const user = await UserModel.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: 'Người dùng không tồn tại' });
    }

    // Kiểm tra mật khẩu hiện tại
    const isPasswordValid = await bcrypt.compare(currentPassword, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Mật khẩu hiện tại không đúng' });
    }

    // Mã hóa mật khẩu mới và cập nhật vào cơ sở dữ liệu
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
