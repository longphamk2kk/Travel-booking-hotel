const express = require('express');
const UserModel = require('../../models/UserModel'); 

const router = express.Router();

router.delete('/:username', async (req, res) => {
  const { username } = req.params;

  try {
    
    const deletedUser = await UserModel.findOneAndDelete({ username });

    if (!deletedUser) {
      return res.status(404).json({ message: 'Người dùng không tồn tại' });
    }

    res.status(200).json({ message: 'Người dùng đã được xóa thành công' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Đã xảy ra lỗi' });
  }
});

module.exports = router;
