const express = require("express");
const router = express.Router();
const Booking = require("../../models/BookingModel");

router.post("/create", async (req, res) => {
  try {
    const bookingData = req.body; // Nhận thông tin đặt phòng từ request body
    const newBooking = await Booking.create(bookingData);
    res.status(201).json(newBooking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
