const express = require("express");
const router = express.Router();
const Booking = require("../../models/BookingModel");

// GET booking history by userId
router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const bookingHistory = await Booking.find({ user: userId });

    res.status(200).json(bookingHistory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
