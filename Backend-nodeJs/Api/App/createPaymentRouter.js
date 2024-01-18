const express = require("express");
const router = express.Router();
const Payment = require("../../models/PaymentModel");

// POST create payment
router.post("/", async (req, res) => {
  try {
    const paymentData = req.body; // Nhận thông tin thanh toán từ request body
    const newPayment = await Payment.create(paymentData);
    res.status(201).json(newPayment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
