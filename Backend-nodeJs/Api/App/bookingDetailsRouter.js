const express = require("express");
const router = express.Router();
const Booking = require("../../models/BookingModel");
const Hotel = require("../../models/HotelModel"); // Import model Hotel

// GET booking detail by bookingId with total amount
router.get("/:bookingId", async (req, res) => {
  try {
    const { bookingId } = req.params;
    const bookingDetail = await Booking.findById(bookingId);

    if (!bookingDetail) {
      return res.status(404).json({ error: "Booking not found" });
    }

    // Lấy thông tin của khách sạn từ đối tượng booking
    const hotelInfo = await Hotel.findById(bookingDetail.hotel);

    // Tính toán số ngày đặt phòng
    const checkInDate = new Date(bookingDetail.checkInDate);
    const checkOutDate = new Date(bookingDetail.checkOutDate);
    const numberOfDays = Math.ceil(
      (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24)
    );

    // Tính tổng số tiền dựa trên giá của khách sạn và số ngày đặt phòng
    const totalAmount = hotelInfo.price * numberOfDays;

    // Thêm trường totalAmount vào đối tượng bookingDetail
    const bookingDetailWithTotalAmount = {
      ...bookingDetail.toObject(),
      totalAmount,
    };

    res.status(200).json(bookingDetailWithTotalAmount);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
