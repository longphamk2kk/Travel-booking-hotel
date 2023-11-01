import "./rent.css";
import Navbar from "../navbar/Navbar";
import Header from "../header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../searchItem/SearchItem"; 


export default function BookingPage() {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [numPeople, setNumPeople] = useState(0);
  const [hotelName, setHotelName] = useState('');
  const [hotelRoomNumber, setHotelRoomNumber] = useState('');
  const [guestName, setGuestName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [bookingPrice, setBookingPrice] = useState(0);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    // Thực hiện xử lý đặt phòng
    // ...
  };

  return (
    <div>
    <Navbar />
    <Header type="rent" />
    <div className="booking-page">
      <h2>Phiếu đặt phòng</h2>
      <form onSubmit={handleBookingSubmit}>
        <div className="form-group">
          <label htmlFor="hotelName">Tên khách sạn:</label>
          <input
            type="text"
            id="hotelName"
            value={hotelName}
            onChange={(e) => setHotelName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="hotelRoomNumber">Phòng số:</label>
          <input
            type="text"
            id="hotelRoomNumber"
            value={hotelRoomNumber}
            onChange={(e) => setHotelRoomNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="checkInDate">Ngày nhận phòng:</label>
          <input
            type="date"
            id="checkInDate"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="checkOutDate">Ngày trả phòng:</label>
          <input
            type="date"
            id="checkOutDate"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="numPeople">Số người:</label>
          <input
            type="number"
            id="numPeople"
            value={numPeople}
            onChange={(e) => setNumPeople(parseInt(e.target.value))}
            min={1}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="guestName">Tên người đặt phòng:</label>
          <input
            type="text"
            id="guestName"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Số điện thoại người đặt:</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="bookingPrice">Giá tiền đặt phòng:</label>
          <input
            type="number"
            id="bookingPrice"
            value={bookingPrice}
            onChange={(e) => setBookingPrice(parseInt(e.target.value))}
            min={0}
            required
          />
        </div>
        <button type="submit">Đặt phòng</button>
      </form>
    </div>
    </div>
  );
}
