const express = require("express");
const router = express.Router();
const Hotel = require("../../../models/HotelModel");

// Sửa thông tin khách sạn theo ID
router.put("/updatehotel/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    if (!updatedHotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }

    res.json({ message: "Hotel updated successfully", hotel: updatedHotel });
  } catch (error) {
    console.error("Error updating hotel", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
