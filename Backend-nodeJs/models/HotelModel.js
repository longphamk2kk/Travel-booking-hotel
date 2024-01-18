const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  overview: String,
  comments: [
    {
      user: String,
      comment: String,
    },
  ],
  roomAmenities: [String],
  facilities: [String],
  checkInTime: String,
  checkOutTime: String,
  price: Number,
  roomTypes: [String], // Phân loại phòng
  location: {
    city: String,
    country: String,
    address: String,
  },
});

const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;
