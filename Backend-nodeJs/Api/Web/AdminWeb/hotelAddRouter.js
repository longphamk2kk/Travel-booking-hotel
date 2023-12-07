const express = require("express");
const router = express.Router();
const Hotel = require("../../../models/HotelModel"); 

router.post("/hoteladd", async (req, res) => {
  try {
    const {
      name,
      rating,
      overview,
      comments,
      roomAmenities,
      facilities,
      checkInTime,
      checkOutTime,
      price,
    } = req.body;
    console.log(req.body,'alo')

    const newHotel = new Hotel({
      name,
      rating,
      overview,
      comments: comments.map((comment) => ({
        user: comment.user,
        comment: comment.comment,
      })),
      roomAmenities,
      facilities,
      checkInTime,
      checkOutTime,
      price,
    });

    const savedHotel = await newHotel.save();
    res.json({ message: "Khách sạn đã được thêm mới", hotel: savedHotel });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Có lỗi xảy ra khi thêm khách sạn" });
  }
});

module.exports = router;
