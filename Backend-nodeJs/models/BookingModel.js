const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, 
  hotel: { type: mongoose.Schema.Types.ObjectId, ref: "Hotel" }, 
  checkInDate: Date,
  checkOutDate: Date,
  guests: Number,
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
