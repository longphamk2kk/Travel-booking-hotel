const express = require("express");
const router = express.Router();
const Payment = require("../../models/PaymentModel");

router.get("/paymentHistory/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const payments = await Payment.find({ user: userId });

    res.status(200).json(payments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
