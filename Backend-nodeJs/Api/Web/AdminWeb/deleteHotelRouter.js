const express = require("express");
const router = express.Router();
const HotelModel = require("../../../models/HotelModel");

// DELETE request để xóa thông tin khách sạn dựa trên hotelId
router.delete("/:hotelId", async (req, res) => {
  try {
    const { hotelId } = req.params;

    // Kiểm tra xem hotelId có hợp lệ không
    if (!hotelId) {
      return res.status(400).json({ message: "Invalid hotelId" });
    }

    // Kiểm tra xem thông tin khách sạn có tồn tại không
    const existingHotel = await HotelModel.findById(hotelId);
    if (!existingHotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }

    // Thực hiện xóa thông tin khách sạn
    await HotelModel.findByIdAndDelete(hotelId);

    res.json({ message: "Hotel deleted successfully" });
  } catch (error) {
    console.error("Error deleting hotel", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
