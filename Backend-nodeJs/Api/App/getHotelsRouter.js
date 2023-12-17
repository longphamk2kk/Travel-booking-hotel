const express = require("express");
const router = express.Router();
const Hotel = require("../../models/HotelModel");

// Lấy thông tin tất cả các khách sạn
router.get("/gethotels", async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.json(hotels);
  } catch (error) {
    console.error("Error fetching hotels", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Lấy thông tin chi tiết của một khách sạn theo ID
router.get("/gethotels/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const hotel = await Hotel.findById(id);
    if (!hotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }

    res.json(hotel);
  } catch (error) {
    console.error("Error fetching hotel details", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
