const express = require("express");
const router = express.Router();
const Booking = require("../../models/BookingModel");

router.delete("/cancelBooking/:bookingId", async (req, res) => {
  try {
    const { bookingId } = req.params;
    const booking = await Booking.findById(bookingId);

    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    // Thực hiện các bước hủy đơn đặt phòng tại đây (nếu có)

    res.status(200).json({ message: "Booking cancelled successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
