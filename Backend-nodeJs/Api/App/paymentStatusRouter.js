const express = require("express");
const router = express.Router();
const Payment = require("../../models/PaymentModel");

router.get("/paymentStatus/:paymentId", async (req, res) => {
  try {
    const { paymentId } = req.params;
    const payment = await Payment.findById(paymentId);

    if (!payment) {
      return res.status(404).json({ error: "Payment not found" });
    }

    res.status(200).json({ status: payment.status });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
