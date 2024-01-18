const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  booking: { type: mongoose.Schema.Types.ObjectId, ref: "Booking" },
  currency: String,
  status: {
    type: String,
    enum: ["Unpaid", "Paid", "Pending", "Failed", "Cancelled", "Refunded"],
    default: "Unpaid",
  },
  method: String,
  transactionId: String,
  // Thêm các trường khác nếu cần
});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
