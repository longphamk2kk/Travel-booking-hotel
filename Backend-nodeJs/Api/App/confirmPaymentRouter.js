const express = require("express");
const router = express.Router();
const Booking = require("../../models/BookingModel");
const Payment = require("../../models/PaymentModel");

router.post("/confirm/:bookingId", async (req, res) => {
  try {
    const { bookingId } = req.params;
    const booking = await Booking.findById(bookingId);

    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    // Thực hiện xác nhận thanh toán và cập nhật trạng thái đơn đặt phòng
    const payment = await Payment.findOne({ booking: bookingId });

    if (!payment) {
      return res.status(404).json({ error: "Payment not found" });
    }

    // Thực hiện các bước xác nhận thanh toán (nếu có)

    // Cập nhật trạng thái đơn đặt phòng (ví dụ: đặt trạng thái là "Confirmed")
    booking.status = "Confirmed";
    await booking.save();

    res
      .status(200)
      .json({ message: "Payment and booking confirmed successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
